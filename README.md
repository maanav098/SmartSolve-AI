# SmartSolve AI 🚀

**AI-Powered Chat Application with Simplified Authentication**

A modern full-stack AI chat application built for Nagarro internship project. Features intelligent conversations using Google's Gemini AI, simplified authentication with test login and Google OAuth support.

![SmartSolve AI](https://img.shields.io/badge/AI-Powered-blue) ![React](https://img.shields.io/badge/React-TypeScript-blue) ![Flask](https://img.shields.io/badge/Flask-Python-green)

---

## 🎯 Quick Start

**Test Credentials (Works Immediately!):**
```
Email: test@nagarro.com
Password: test123
```

**Run Locally:**
```bash
# Backend
cd server
python server.py

# Frontend (new terminal)
cd client
npm start
```

Visit `http://localhost:3000` → Login with test credentials → Start chatting!

---

## 🚀 Features

- 🔐 **Simplified Authentication**: Test login + Google OAuth
- 🤖 **AI Chat Interface**: Interactive chat with Google Gemini AI
- 📁 **Multimodal Support**: Upload and analyze images
- 🌙 **Dark/Light Mode**: Theme toggle
- 📱 **Responsive Design**: Works on all devices
- 🔒 **JWT Security**: Protected routes and endpoints

---

## 🛠️ Tech Stack

**Frontend:** React 18 (TypeScript) • Material-UI • React Router • Axios  
**Backend:** Flask • Google Generative AI • JWT • CORS  
**Deployment:** Render (Backend) • Vercel/Netlify (Frontend)

---

## 📋 Setup & Deployment

**📖 Complete Setup Guide:** See [`SETUP_GUIDE.md`](./SETUP_GUIDE.md) for:
- Installation instructions
- Environment configuration
- Google OAuth setup (optional)
- Render deployment
- Troubleshooting

**Quick Setup:**
1. Clone repo: `git clone https://github.com/maanav098/SmartSolve-AI.git`
2. Create `server/.env` with:
   ```env
   GEMINI_API_KEY=your_key
   JWT_SECRET_KEY=nagarro-smartsolve-2025-secret
   ```
3. Install & run (commands above)

---

## 🌐 Production

**Backend:** [https://smartsolve-ai.onrender.com](https://smartsolve-ai.onrender.com)  
**Status:** ✅ Running

---

## � Project Structure

```
project-root/
├── server/              # Flask backend
│   ├── server.py        # Main backend logic
│   ├── requirements.txt # Dependencies
│   └── .env            # Environment variables (not committed)
├── client/              # React frontend
│   └── src/
│       ├── auth/        # Authentication logic
│       ├── login_page/  # Login UI
│       └── homepage/    # Chat interface
├── README.md            # This file
└── SETUP_GUIDE.md      # Detailed setup instructions
```

---

## 🧪 Testing

**Local:**
```bash
curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@nagarro.com\",\"password\":\"test123\"}"
```

**Production:**
```bash
curl -X POST https://smartsolve-ai.onrender.com/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@nagarro.com\",\"password\":\"test123\"}"
```

---

## 🔐 Security

- `.env` file in `.gitignore` (never committed)
- JWT tokens with 24-hour expiration
- HTTPS in production
- OAuth secrets in environment variables

---

## 📄 License

Educational project for Nagarro internship program.

---

**For detailed setup, deployment, and troubleshooting:** See [`SETUP_GUIDE.md`](./SETUP_GUIDE.md)

**Happy coding! 🚀**