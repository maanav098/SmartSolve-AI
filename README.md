# SmartSolve AI 🚀

<div align="center">

**AI-Powered Full-Stack Chat Application with Multimodal Support**

A modern, production-ready AI chat application built with Google's Gemini AI, featuring intelligent conversations, image analysis, and seamless authentication.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0.0-000000?logo=flask)](https://flask.palletsprojects.com/)
[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?logo=python)](https://www.python.org/)
[![Gemini AI](https://img.shields.io/badge/Google-Gemini--2.5--Flash-4285F4?logo=google)](https://ai.google.dev/)

[Features](#-features) • [Quick Start](#-quick-start) • [Installation](#-installation) • [API Documentation](#-api-documentation) • [Deployment](#-deployment)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Security](#-security)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📝 About

**SmartSolve AI** is a full-stack AI-powered chat application developed as part of the Nagarro internship program. It leverages Google's Gemini 2.5 Flash model to provide intelligent, multimodal conversations that support both text and image inputs.

### Key Highlights

- 🤖 **Advanced AI Integration**: Powered by Google's Gemini 2.5 Flash for intelligent responses
- 🎨 **Modern UI/UX**: Glassmorphism design with smooth animations and dark/light mode
- 🔐 **Secure Authentication**: JWT-based auth with test credentials and Google OAuth support
- 📸 **Multimodal Capabilities**: Upload and analyze images alongside text queries
- ⚡ **Production Ready**: Deployed on Render (backend) with optimized performance
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

---

## 🚀 Features

### Core Features

- **🔐 Dual Authentication System**
  - Quick test login for immediate access
  - Google OAuth 2.0 integration for secure sign-in
  - JWT token-based session management

- **🤖 Intelligent AI Chat**
  - Real-time conversations with Google Gemini AI
  - Context-aware responses
  - Markdown rendering for formatted output
  - Loading states and error handling

- **📁 Multimodal Support**
  - Upload images (JPG, PNG, etc.)
  - Analyze images with text queries
  - Combined text + image understanding
  - Automatic file cleanup

- **🌙 Theme System**
  - Dark mode and light mode
  - Smooth theme transitions
  - Persistent theme preferences
  - System preference detection

- **📱 Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for all screen sizes
  - Touch-friendly interactions
  - Optimized performance

- **🔒 Security Features**
  - Protected API routes with JWT
  - Secure token storage
  - CORS configuration
  - Environment variable protection

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI framework |
| **TypeScript** | 4.9.5 | Type safety |
| **Material-UI** | 5.15.21 | Component library |
| **React Router** | 6.24.1 | Navigation |
| **Axios** | 1.7.2 | HTTP client |
| **React OAuth Google** | 0.12.2 | Google authentication |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Flask** | 3.0.0 | Web framework |
| **Google Generative AI** | 0.8.0 | Gemini AI integration |
| **Flask-JWT-Extended** | 4.6.0 | JWT authentication |
| **Flask-CORS** | 4.0.0 | Cross-origin requests |
| **Python-dotenv** | 1.0.0 | Environment management |
| **Pillow** | ≥11.0.0 | Image processing |

### Deployment

- **Backend**: Render (Python/Flask)
- **Frontend**: Vercel/Netlify (React)
- **Database**: In-memory (can be extended to PostgreSQL/MongoDB)

---

## 🎯 Quick Start

### Prerequisites

- **Node.js** v16 or higher
- **Python** v3.8 or higher
- **Google Gemini API Key** ([Get it here](https://aistudio.google.com/))

### Test Credentials

```
Email: test@nagarro.com
Password: test123
```

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/maanav098/SmartSolve-AI.git
   cd SmartSolve-AI
   ```

2. **Set up the backend**
   ```bash
   cd server
   pip install -r requirements.txt
   ```

3. **Configure environment variables**
   ```bash
   # Create server/.env file
   GEMINI_API_KEY=your_gemini_api_key_here
   JWT_SECRET_KEY=nagarro-smartsolve-2025-secret
   ```

4. **Start the backend server**
   ```bash
   python server.py
   # Server runs on http://localhost:5000
   ```

5. **Set up the frontend** (in a new terminal)
   ```bash
   cd client
   npm install
   npm start
   # App runs on http://localhost:3000
   ```

6. **Access the application**
   - Open `http://localhost:3000`
   - Login with test credentials
   - Start chatting with AI!

---

## ⚙️ Installation

### Detailed Installation Steps

<details>
<summary>Click to expand detailed installation guide</summary>

### Step 1: Clone Repository

```bash
git clone https://github.com/maanav098/SmartSolve-AI.git
cd SmartSolve-AI
```

### Step 2: Backend Setup

```bash
cd server

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Step 3: Frontend Setup

```bash
cd client

# Install dependencies
npm install
```

### Step 4: Environment Configuration

Create `server/.env` file:

```env
# Required
GEMINI_API_KEY=your_gemini_api_key_here
JWT_SECRET_KEY=nagarro-smartsolve-2025-secret

# Optional (for Google OAuth)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FRONTEND_URL=http://localhost:3000
```

### Step 5: Run the Application

**Terminal 1 - Backend:**
```bash
cd server
python server.py
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

</details>

---

## 🔧 Configuration

### Environment Variables

#### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `GEMINI_API_KEY` | Google Gemini API key | `AIzaSy...` |
| `JWT_SECRET_KEY` | Secret key for JWT tokens | `your-secret-key` |

#### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | - |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | - |
| `FRONTEND_URL` | Frontend URL for OAuth redirects | `http://localhost:3000` |

### Google OAuth Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new project
3. Enable Google+ API
4. Configure OAuth consent screen
5. Create OAuth 2.0 Client ID (Web application)
6. Add redirect URIs:
   - `http://localhost:5000/auth/google/callback` (local)
   - `https://smartsolve-ai.onrender.com/auth/google/callback` (production)
7. Copy Client ID and Client Secret to `.env`

For detailed OAuth setup, see [`SETUP_GUIDE.md`](./SETUP_GUIDE.md).

---

## 📚 API Documentation

### Authentication Endpoints

#### `POST /login`
Test login endpoint.

**Request:**
```json
{
  "email": "test@nagarro.com",
  "password": "test123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": {
    "email": "test@nagarro.com",
    "name": "Test User",
    "provider": "test"
  }
}
```

#### `GET /auth/google`
Initiate Google OAuth flow.

**Response:**
```json
{
  "auth_url": "https://accounts.google.com/o/oauth2/auth?..."
}
```

#### `GET /auth/google/callback`
OAuth callback endpoint (handled automatically).

#### `POST /auth/logout`
Logout user (requires JWT token).

**Headers:**
```
Authorization: Bearer <token>
```

#### `GET /auth/profile`
Get user profile (requires JWT token).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "user": {
    "email": "test@nagarro.com",
    "name": "User",
    "provider": "authenticated"
  }
}
```

### AI Chat Endpoints

#### `POST /gemini`
Send message to Gemini AI (requires JWT token).

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request (Text only):**
```json
{
  "query": "What is artificial intelligence?"
}
```

**Request (With Image):**
```
Content-Type: multipart/form-data
query: "What's in this image?"
file: <image file>
```

**Response:**
```json
{
  "result": "Artificial intelligence (AI) is..."
}
```

**Error Response:**
```json
{
  "error": "Error message here"
}
```

---

## 📁 Project Structure

```
project-root/
├── server/                      # Flask backend
│   ├── server.py               # Main Flask application
│   ├── requirements.txt        # Python dependencies
│   ├── .env                    # Environment variables (not committed)
│   └── venv/                   # Virtual environment (not committed)
│
├── client/                      # React frontend
│   ├── public/                 # Static assets
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── auth/               # Authentication logic
│   │   │   ├── OAuthCallback.tsx
│   │   │   ├── oauthService.ts
│   │   │   └── useAuth.tsx
│   │   ├── login_page/         # Login UI components
│   │   │   ├── loginpage.tsx
│   │   │   ├── Header/
│   │   │   ├── footer/
│   │   │   └── left-right/
│   │   ├── homepage/           # Chat interface
│   │   │   ├── homepage.tsx
│   │   │   ├── loading/
│   │   │   ├── result.tsx
│   │   │   └── error.tsx
│   │   ├── Darkmode/           # Theme system
│   │   ├── router/             # Routing configuration
│   │   ├── App.tsx             # Main app component
│   │   └── index.tsx           # Entry point
│   ├── package.json
│   └── tsconfig.json
│
├── README.md                    # This file
├── SETUP_GUIDE.md              # Detailed setup instructions
└── vercel.json                 # Vercel deployment config
```

---

## 🌐 Deployment

### Backend Deployment (Render)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to production"
   git push origin main
   ```

2. **Create Render Service**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `smartsolve-ai`
     - **Environment**: `Python 3`
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `python server.py`

3. **Set Environment Variables**
   ```
   GEMINI_API_KEY=your_key
   JWT_SECRET_KEY=your_secret
   FRONTEND_URL=https://your-frontend.vercel.app
   GOOGLE_CLIENT_ID=your_client_id (optional)
   GOOGLE_CLIENT_SECRET=your_client_secret (optional)
   ```

4. **Deploy**
   - Render will automatically deploy on every push to main
   - Your backend will be available at `https://smartsolve-ai.onrender.com`

### Frontend Deployment (Vercel)

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd client
   vercel
   ```

   Or connect your GitHub repo to Vercel dashboard for automatic deployments.

3. **Configure Environment Variables**
   - Set `REACT_APP_API_URL` to your backend URL

For detailed deployment instructions, see [`SETUP_GUIDE.md`](./SETUP_GUIDE.md).

---

## 🧪 Testing

### Local Testing

**Test Login Endpoint:**
```bash
curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@nagarro.com","password":"test123"}'
```

**Test Chat Endpoint:**
```bash
curl -X POST http://localhost:5000/gemini \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"query":"Hello, how are you?"}'
```

### Production Testing

**Test Login:**
```bash
curl -X POST https://smartsolve-ai.onrender.com/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@nagarro.com","password":"test123"}'
```

### Manual Testing Checklist

- [ ] Login with test credentials
- [ ] Login with Google OAuth (if configured)
- [ ] Send text messages to AI
- [ ] Upload and analyze images
- [ ] Toggle dark/light mode
- [ ] Test responsive design on mobile
- [ ] Verify JWT token expiration
- [ ] Test logout functionality

---

## 🔒 Security

### Security Features

- ✅ **Environment Variables**: All secrets stored in `.env` (not committed)
- ✅ **JWT Tokens**: Secure token-based authentication with 24-hour expiration
- ✅ **HTTPS**: Enforced in production
- ✅ **CORS**: Properly configured for cross-origin requests
- ✅ **Protected Routes**: API endpoints require authentication
- ✅ **Input Validation**: Server-side validation for all inputs

### Best Practices

1. **Never commit `.env` files** - Already in `.gitignore`
2. **Rotate secrets periodically** - Update JWT_SECRET_KEY regularly
3. **Use strong secrets** - Generate random strings for production
4. **Monitor API usage** - Track Gemini API quota and rate limits
5. **Keep dependencies updated** - Regularly update npm and pip packages

### Security Checklist

- [ ] `.env` file is in `.gitignore`
- [ ] JWT_SECRET_KEY is strong and unique
- [ ] OAuth credentials are properly secured
- [ ] HTTPS is enabled in production
- [ ] CORS is configured correctly
- [ ] API rate limiting is considered

---

## 🤝 Contributing

This is an internship project, but contributions and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is developed for educational purposes as part of the Nagarro internship program.

---

## 🙏 Acknowledgments

- **Google Gemini AI** - For providing powerful AI capabilities
- **Nagarro** - For the internship opportunity and guidance
- **React & Flask Communities** - For excellent documentation and support
- **Open Source Contributors** - For the amazing libraries and tools

---

## 📞 Support & Resources

### Documentation

- [Detailed Setup Guide](./SETUP_GUIDE.md) - Complete installation and deployment guide
- [Google Gemini API Docs](https://ai.google.dev/docs) - AI model documentation
- [Flask Documentation](https://flask.palletsprojects.com/) - Backend framework docs
- [React Documentation](https://react.dev/) - Frontend framework docs

### Important Links

- **Backend (Production)**: [https://smartsolve-ai.onrender.com](https://smartsolve-ai.onrender.com)
- **Google Cloud Console**: [https://console.cloud.google.com](https://console.cloud.google.com)
- **Render Dashboard**: [https://dashboard.render.com](https://dashboard.render.com)
- **Get Gemini API Key**: [https://aistudio.google.com](https://aistudio.google.com)

### Troubleshooting

If you encounter issues:

1. Check [SETUP_GUIDE.md](./SETUP_GUIDE.md) for common problems
2. Verify all environment variables are set correctly
3. Check backend logs on Render dashboard
4. Check browser console for frontend errors
5. Test API endpoints directly with curl

---

<div align="center">

**Built with ❤️ by [Maanav Ghai](https://github.com/maanav098)**

[Portfolio](https://maanav-ghai-portfolio.vercel.app/) • [GitHub](https://github.com/maanav098) • [LinkedIn](https://linkedin.com/in/maanavghai)

**Happy coding! 🚀**

</div>
