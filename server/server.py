from flask import Flask, request, jsonify, render_template
import google.generativeai as genai
import os
import tempfile
from dotenv import load_dotenv
import shutil

# Load environment variables from .env file
load_dotenv('../.env')

app = Flask(__name__)

# Configure the GenAI API with the key from environment variables
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("Missing GEMINI_API_KEY environment variable")

genai.configure(api_key=api_key)

# Initialize the Gemini model
model = genai.GenerativeModel('gemini-2.5-flash')

# Handle CORS for development
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

# Route to handle login functionality
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    # Example authentication logic
    if email == "123@gmail.com" and password == "123":
        return jsonify({"message": "Login successful!"}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

# Route to handle Gemini API search
@app.route("/gemini", methods=["POST"])
def gemini_search():
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