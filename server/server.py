from flask import Flask, request, jsonify, render_template, redirect
import google.generativeai as genai
import os
import tempfile
from dotenv import load_dotenv
import shutil
import requests
from datetime import datetime, timedelta
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

# Load environment variables from .env file
load_dotenv()  # Loads .env from current directory

app = Flask(__name__)

# Simple configuration
app.config['SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'nagarro-smartsolve-ai-secret-2025')
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'nagarro-smartsolve-ai-secret-2025')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=24)  # 24 hour tokens

# Initialize JWT
jwt = JWTManager(app)

# Google OAuth Configuration
GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID')
GOOGLE_CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET')

# Frontend URL (for OAuth redirects)
FRONTEND_URL = os.environ.get('FRONTEND_URL', 'http://localhost:3000')

# Configure the GenAI API
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("Missing GEMINI_API_KEY environment variable")

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-2.5-flash')

# Simple user storage (in production, use a database)
authenticated_users = set()

# Handle CORS manually for simplicity
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

# Route for serving the React frontend
@app.route("/")
def index():
    return render_template("index.html")

# Simple test login (email: test@nagarro.com, password: test123)
@app.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        email = data.get("email", "").strip().lower()
        password = data.get("password", "")

        # Test credentials
        if email == "test@nagarro.com" and password == "test123":
            # Add to authenticated users
            authenticated_users.add(email)
            
            # Generate JWT token
            access_token = create_access_token(
                identity=email,
                additional_claims={"name": "Test User", "provider": "test"}
            )
            
            return jsonify({
                "message": "Login successful",
                "access_token": access_token,
                "user": {
                    "email": email,
                    "name": "Test User",
                    "provider": "test"
                }
            }), 200
        else:
            return jsonify({"error": "Invalid credentials. Use test@nagarro.com / test123"}), 401

    except Exception as e:
        return jsonify({"error": "Login failed"}), 500

# Google OAuth 2.0 Authorization
@app.route("/auth/google", methods=["GET"])
def google_auth():
    if not GOOGLE_CLIENT_ID:
        return jsonify({"error": "Google OAuth not configured"}), 500
    
    google_auth_url = (
        f"https://accounts.google.com/o/oauth2/auth?"
        f"client_id={GOOGLE_CLIENT_ID}&"
        f"redirect_uri=https://smartsolve-ai.onrender.com/auth/google/callback&"
        f"scope=openid email profile&"
        f"response_type=code&"
        f"access_type=offline"
    )
    
    return jsonify({"auth_url": google_auth_url}), 200

# Google OAuth 2.0 Callback
@app.route("/auth/google/callback")
def google_callback():
    try:
        code = request.args.get('code')
        if not code:
            return "Authorization failed", 400

        # Exchange code for tokens
        token_url = "https://oauth2.googleapis.com/token"
        token_data = {
            'client_id': GOOGLE_CLIENT_ID,
            'client_secret': GOOGLE_CLIENT_SECRET,
            'code': code,
            'grant_type': 'authorization_code',
            'redirect_uri': 'https://smartsolve-ai.onrender.com/auth/google/callback'
        }

        token_response = requests.post(token_url, data=token_data)
        if token_response.status_code != 200:
            return "Failed to obtain access token", 400

        tokens = token_response.json()
        access_token = tokens.get('access_token')

        # Get user information
        user_info_url = f"https://www.googleapis.com/oauth2/v2/userinfo?access_token={access_token}"
        user_response = requests.get(user_info_url)
        if user_response.status_code != 200:
            return "Failed to get user information", 400

        user_data = user_response.json()
        email = user_data.get('email', '').lower()
        name = user_data.get('name', '')

        # Add to authenticated users
        authenticated_users.add(email)

        # Generate JWT token
        jwt_access_token = create_access_token(
            identity=email,
            additional_claims={"name": name, "provider": "google"}
        )

        # Redirect to frontend with token
        redirect_url = f"{FRONTEND_URL}/auth/callback?token={jwt_access_token}"
        return redirect(redirect_url)

    except Exception as e:
        return f"OAuth callback failed: {str(e)}", 500

# User profile endpoint
@app.route("/auth/profile", methods=["GET"])
@jwt_required()
def profile():
    current_user = get_jwt_identity()
    if current_user not in authenticated_users:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "user": {
            "email": current_user,
            "name": "User",  # You can enhance this
            "provider": "authenticated"
        }
    }), 200

# Logout endpoint
@app.route("/auth/logout", methods=["POST"])
@jwt_required()
def logout():
    current_user = get_jwt_identity()
    authenticated_users.discard(current_user)
    return jsonify({"message": "Successfully logged out"}), 200

# Route to handle Gemini API search - Protected endpoint
@app.route("/gemini", methods=["POST"])
@jwt_required()
def gemini_search():
    # Verify user is authenticated
    current_user = get_jwt_identity()
    if current_user not in authenticated_users:
        return jsonify({"error": "User not authenticated"}), 401
    try:
        temp_dir = None
        
        if 'file' in request.files:
            file = request.files['file']
            if file.filename == '':
                return jsonify({"error": "No file selected"}), 400
                
            query = request.form.get("query")
            if not query:
                return jsonify({"error": "Query is required"}), 400
                
            # Create a temporary directory
            temp_dir = tempfile.mkdtemp()
            file_path = os.path.join(temp_dir, file.filename)
            file.save(file_path)
            
            try:
                # Generate content with file as part of the input
                with open(file_path, "rb") as f:
                    file_data = f.read()
                
                # Create an image part from file data for multimodal input
                image_part = {"mime_type": file.content_type, "data": file_data}
                response = model.generate_content([query, image_part])
                generated_text = response.text
                
                return jsonify({"result": generated_text}), 200
            except Exception as e:
                return jsonify({"error": f"Error processing file: {str(e)}"}), 500
            finally:
                # Clean up temporary directory and files
                if temp_dir and os.path.exists(temp_dir):
                    shutil.rmtree(temp_dir)
        else:
            # Handle text-only queries
            data = request.get_json()
            if not data:
                return jsonify({"error": "Request body is required"}), 400
                
            query = data.get("query")
            if not query:
                return jsonify({"error": "Query is required"}), 400
            
            # Generate content using Gemini model
            response = model.generate_content(query)
            generated_text = response.text
            return jsonify({"result": generated_text}), 200
    except Exception as rate_error:
        if "429" in str(rate_error) or "quota" in str(rate_error).lower():
            return jsonify({"error": "Rate limit exceeded. Please try again later."}), 429
        raise rate_error
    except Exception as e:
        error_message = f"Error generating content: {str(e)}"
        print(error_message)
        return jsonify({"error": error_message}), 500


# Run the Flask app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)