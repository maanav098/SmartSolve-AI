# SmartSolve AI 🚀

**AI-Powered Chat Application with Simplified Authentication**

Built for Nagarro Internship Project - Nagarro Internship Project

A modern, full-stack AI-powered web application developed as part of a Nagarro internship program. The application provides intelligent chat capabilities with multimodal support (text and image input) using Google's Gemini AI. Built with React TypeScript frontend and Flask Python backend.

![SmartSolve AI](https://img.shields.io/badge/AI-Powered-blue) ![React](https://img.shields.io/badge/React-TypeScript-blue) ![Flask](https://img.shields.io/badge/Flask-Python-green) ![Gemini](https://img.shields.io/badge/Google-Gemini--AI-red)

## 🚀 Features

- **🤖 AI Chat Interface**: Interactive chat with Google Gemini AI
- **📁 Multimodal Support**: Upload and analyze images with text queries
- **🌙 Dark/Light Mode**: Toggle between themes for better user experience
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🔐 Authentication**: Simple login system with demo credentials
- **⚡ Real-time Loading**: Beautiful loading animations and progress indicators
- **🎨 Modern UI**: Professional glassmorphism design with smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Material-UI** for components
- **React Router** for navigation
- **Axios** for API calls
- **NProgress** for loading indicators

### Backend
- **Flask** (Python web framework)
- **Google Generative AI** (Gemini API)
- **Python-dotenv** for environment management
- **Flask-CORS** for cross-origin requests

## Project Structure

- `client/` - React frontend (TypeScript)
- `server/` - Flask backend (Python)
- `.env` - Environment variables (API keys, etc.)

## 📋 Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- Google Gemini API Key

## ⚙️ Installation & Setup

### 1. Clone the Repository
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
cd ../client
npm install
```

### 4. Environment Configuration
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**How to get Gemini API Key:**
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Create a new API key
4. Copy and paste it in your `.env` file

## 🚀 Running the Application

### Start Backend Server
```bash
cd server
python server.py
```
Backend will run on `http://localhost:5000`

### Start Frontend
```bash
cd client
npm start
```
Frontend will run on `http://localhost:3000`

## 👤 Demo Credentials


**Email**: `123@gmail.com`
**Password**: `123`

> Use these credentials to log in. After login, you can use the Logout button (top right in homepage) to securely exit, or the Back button to return to the previous page. The homepage header is designed to match the login page's futuristic glassmorphism style for a seamless user experience.


## Usage


- **Login**: Use the demo credentials above. The login page and homepage both feature a modern, glassmorphic header and responsive design.
- **Logout/Back**: Use the Logout button in the homepage header to securely log out, or Back to return to the previous page.
- **Chat**: Enter a query or upload an image to interact with Gemini AI.
- **Dark/Futuristic Mode**: Toggle using the bat icon for a Futuristic look.
- **Responsive UI**: The site is fully responsive and user-friendly on all devices.

## Customization

- **Authentication**: Update logic in [`server/server.py`](server/server.py) and [`client/src/auth/useAuth.tsx`](client/src/auth/useAuth.tsx).
- **Gemini API**: Modify endpoints in [`server/server.py`](server/server.py).
- **Frontend UI**: All React components are in [`client/src`](client/src).

## License

This project is for educational/demo purposes.

---

**Frontend entry point:** [`client/src/index.tsx`](client/src/index.tsx)  
**Backend entry point:** [`server/server.py`](server/server.py)