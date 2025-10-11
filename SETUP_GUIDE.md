# SmartSolve AI 🚀

**AI-Powered Chat Application with Simplified Authentication**

Built for Nagarro Internship Project

A modern, full-stack AI-powered web application with intelligent chat capabilities using Google's Gemini AI. Features simplified authentication with test login and Google OAuth support.

![SmartSolve AI](https://img.shields.io/badge/AI-Powered-blue) ![React](https://img.shields.io/badge/React-TypeScript-blue) ![Flask](https://img.shields.io/badge/Flask-Python-green) ![Gemini](https://img.shields.io/badge/Google-Gemini--AI-red)

---

## 🎯 Quick Start

### Test Credentials (Works Immediately!)
```
Email: test@nagarro.com
Password: test123
```

### Run Locally
```bash
# Backend
cd server
pip install -r requirements.txt
python server.py

# Frontend (new terminal)
cd client
npm install
npm start
```

Visit `http://localhost:3000` and login with test credentials!

---

## 🚀 Features

- **🔐 Simplified Authentication**: Test login + Google OAuth
- **🤖 AI Chat Interface**: Interactive chat with Google Gemini AI
- **📁 Multimodal Support**: Upload and analyze images with text queries
- **🌙 Dark/Light Mode**: Toggle between themes
- **📱 Responsive Design**: Works on desktop and mobile
- **🔒 JWT Security**: Protected routes and API endpoints
- **⚡ Real-time Loading**: Beautiful loading animations
- **🎨 Modern UI**: Glassmorphism design with smooth animations

---

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Material-UI components
- React Router for navigation
- Axios for API calls
- JWT authentication

### Backend
- Flask (Python)
- Google Generative AI (Gemini)
- Flask-JWT-Extended for auth
- Flask-CORS for cross-origin requests

---

## 📋 Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- Google Gemini API Key ([Get it here](https://aistudio.google.com/))

---

## ⚙️ Installation

### 1. Clone Repository
```bash
git clone https://github.com/maanav098/SmartSolve-AI.git
cd SmartSolve-AI
```

### 2. Backend Setup
```bash
cd server
pip install -r requirements.txt
```

### 3. Frontend Setup
```bash
cd client
npm install
```

### 4. Environment Configuration

Create `server/.env`:
```env
# Required
GEMINI_API_KEY=your_gemini_api_key_here
JWT_SECRET_KEY=nagarro-smartsolve-2025-secret

# Optional (for Google OAuth)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FRONTEND_URL=http://localhost:3000
```

---

## 🔐 Google OAuth Setup (Optional)

### Step 1: Create OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new project: "SmartSolve AI"
3. Enable **Google+ API**
4. Configure **OAuth consent screen**:
   - App name: SmartSolve AI
   - Add scopes: `userinfo.email`, `userinfo.profile`, `openid`
5. Create **OAuth client ID**:
   - Type: Web application
   - Add redirect URIs:
     ```
     http://localhost:5000/auth/google/callback
     https://smartsolve-ai.onrender.com/auth/google/callback
     ```
6. Copy **Client ID** and **Client Secret**

### Step 2: Add to Environment

Add to `server/.env`:
```env
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
```

---

## 🌐 Render Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Deploy SmartSolve AI"
git push origin main
```

### Step 2: Configure Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Open your service → **Environment** tab
3. Add environment variables:
   ```
   GEMINI_API_KEY = your_key
   JWT_SECRET_KEY = nagarro-smartsolve-2025-secret
   FRONTEND_URL = http://localhost:3000
   GOOGLE_CLIENT_ID = your_google_client_id (optional)
   GOOGLE_CLIENT_SECRET = your_google_client_secret (optional)
   ```
4. Wait for auto-deploy to complete

### Step 3: Test Deployment
```bash
curl -X POST https://smartsolve-ai.onrender.com/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@nagarro.com","password":"test123"}'
```

---

## 🧪 Testing

### Local Testing
1. Start backend: `cd server && python server.py`
2. Start frontend: `cd client && npm start`
3. Login with: `test@nagarro.com` / `test123`
4. Test chat with AI
5. Test Google OAuth (if configured)

### Production Testing
1. Visit your deployed URL
2. Login with test credentials
3. Test all features

---

## 📊 API Endpoints

```
POST   /login                      # Test login
GET    /auth/google                # Start Google OAuth
GET    /auth/google/callback       # OAuth callback
POST   /auth/logout                # Logout
POST   /chat                       # Send message (requires JWT)
```

---

## 🐛 Troubleshooting

### "Google OAuth not configured"
- Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to environment

### "redirect_uri_mismatch"
- Add exact redirect URI to Google Console:
  - Local: `http://localhost:5000/auth/google/callback`
  - Production: `https://smartsolve-ai.onrender.com/auth/google/callback`

### "Invalid credentials"
- Use exact: `test@nagarro.com` / `test123`

### Chat not working
- Verify `GEMINI_API_KEY` is valid
- Check backend logs for errors

### Deployment fails
- Check Render logs
- Verify all environment variables are set
- Ensure `requirements.txt` format is correct

---

## 🔒 Security

- ✅ `.env` file in `.gitignore` (never committed)
- ✅ JWT tokens with 24-hour expiration
- ✅ HTTPS in production
- ✅ CORS configured properly
- ✅ OAuth secrets in environment variables

**Best Practices:**
- Never commit `.env` to Git
- Never share OAuth secrets publicly
- Use environment variables for all secrets
- Rotate credentials periodically

---

## 📁 Project Structure

```
project-root/
├── server/
│   ├── server.py              # Flask backend
│   ├── requirements.txt       # Dependencies
│   ├── .env                   # Environment vars (not committed)
│   └── .env.example          # Template
├── client/
│   ├── src/
│   │   ├── auth/             # Authentication
│   │   ├── login_page/       # Login UI
│   │   └── homepage/         # Chat interface
│   └── package.json
└── README.md                  # This file
```

---

## 🎯 Quick Reference

### Environment Variables
```env
# Required
GEMINI_API_KEY=your_key
JWT_SECRET_KEY=your_secret

# Optional (Google OAuth)
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
FRONTEND_URL=http://localhost:3000
```

### Test Credentials
```
Email: test@nagarro.com
Password: test123
```

### Important URLs
- **Google Cloud:** https://console.cloud.google.com/apis/credentials
- **Render Dashboard:** https://dashboard.render.com
- **Backend (Prod):** https://smartsolve-ai.onrender.com
- **Frontend (Local):** http://localhost:3000

---

## 👨‍💻 Development

- **Authentication**: [`server/server.py`](server/server.py) + [`client/src/auth/`](client/src/auth/)
- **AI Integration**: [`server/server.py`](server/server.py) (Gemini endpoints)
- **UI Components**: [`client/src/`](client/src/)
- **Styling**: CSS files in component folders

---

## 📄 License

This project is for educational purposes as part of Nagarro internship program.

---

## 🙏 Acknowledgments

- Google Gemini AI for powerful AI capabilities
- Nagarro for the internship opportunity
- React and Flask communities

---

**Need Help?**
1. Check Render logs for backend errors
2. Check browser console for frontend errors
3. Verify all environment variables are set
4. Test backend endpoints directly with curl

**Happy coding! 🚀**
