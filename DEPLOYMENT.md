# SmartSolve AI - Deployment Guide

## 🚀 Simplified Authentication System

This application now uses a **simplified authentication system** with:
- ✅ **Test Login**: Email/password authentication for testing
- ✅ **Google OAuth**: Single sign-on with Google accounts
- ✅ **JWT Tokens**: Secure session management

---

## 📋 Test Credentials

Use these credentials to test the application immediately:

```
Email: test@nagarro.com
Password: test123
```

---

## 🔧 Backend Deployment (Render)

### Current Setup
Your backend is already deployed at: `https://smartsolve-ai.onrender.com`

### Environment Variables Required

Add these to your Render environment variables:

```bash
# Required - Already configured
GEMINI_API_KEY=your_gemini_api_key_here
JWT_SECRET_KEY=your_secure_random_secret_key

# Optional - For Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=https://smartsolve-ai.onrender.com/auth/google/callback
```

### Getting Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Application type: **Web application**
6. Authorized redirect URIs:
   ```
   https://smartsolve-ai.onrender.com/auth/google/callback
   http://localhost:5000/auth/google/callback (for local testing)
   ```
7. Copy the **Client ID** and **Client Secret**

### Deploying Backend Changes

Since your backend is on GitHub and connected to Render:

```bash
# 1. Commit the updated server.py and requirements.txt
cd server
git add server.py requirements.txt
git commit -m "Simplified authentication system"
git push origin main

# 2. Render will automatically redeploy
# 3. Add environment variables in Render dashboard
# 4. Restart the service if needed
```

---

## 🎨 Frontend Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from client directory
cd client
vercel --prod
```

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
cd client
npm run build
netlify deploy --prod --dir=build
```

### Frontend Environment Variables

No environment variables needed! The frontend is configured to use:
- Production: `https://smartsolve-ai.onrender.com`

---

## 🔐 Authentication Flow

### Test Login Flow
1. User enters `test@nagarro.com` / `test123`
2. Backend validates credentials
3. JWT token issued
4. User redirected to `/home`

### Google OAuth Flow
1. User clicks "Continue with Google"
2. Redirected to Google login
3. Google callback returns to: `/auth/google/callback`
4. Backend exchanges code for user info
5. JWT token issued with `?token=xxx`
6. Frontend captures token and redirects to `/home`

---

## 📦 File Structure

```
project-root/
├── server/
│   ├── server.py          # Flask backend with auth
│   └── requirements.txt   # Python dependencies
│
├── client/
│   ├── src/
│   │   ├── auth/
│   │   │   ├── oauthService.ts      # Simplified auth service
│   │   │   ├── useAuth.tsx          # Auth context
│   │   │   └── OAuthCallback.tsx    # OAuth callback handler
│   │   ├── login_page/
│   │   │   ├── loginpage.tsx        # Login UI
│   │   │   └── login.css            # Login styles
│   │   └── homepage/
│   │       └── homepage.tsx         # Protected chat interface
│   └── package.json
│
└── DEPLOYMENT.md          # This file
```

---

## ✅ Deployment Checklist

### Backend (Render)
- [x] Updated `server.py` with simplified auth
- [x] Updated `requirements.txt` with minimal dependencies
- [ ] Added `JWT_SECRET_KEY` to Render environment
- [ ] Added `GOOGLE_CLIENT_ID` to Render environment (optional)
- [ ] Added `GOOGLE_CLIENT_SECRET` to Render environment (optional)
- [ ] Committed and pushed changes to GitHub
- [ ] Verified Render auto-deployment completed
- [ ] Tested `/login` endpoint with test credentials
- [ ] Tested `/auth/google` endpoint (if OAuth configured)

### Frontend
- [x] Updated authentication service
- [x] Updated login page UI
- [x] Updated OAuth callback handler
- [ ] Built production bundle: `npm run build`
- [ ] Deployed to Vercel/Netlify
- [ ] Tested login with test credentials
- [ ] Tested Google OAuth flow (if configured)
- [ ] Verified chat functionality works

---

## 🧪 Testing

### Local Testing

**Backend:**
```bash
cd server
python server.py
# Server runs on http://localhost:5000
```

**Frontend:**
```bash
cd client
npm start
# App runs on http://localhost:3000
```

**Test the application:**
1. Open `http://localhost:3000`
2. Login with `test@nagarro.com` / `test123`
3. Verify redirect to home page
4. Test chat functionality

### Production Testing

1. Visit your deployed frontend URL
2. Test login with test credentials
3. Test Google OAuth (if configured)
4. Verify chat API calls work
5. Check browser console for errors

---

## 🐛 Troubleshooting

### "Authentication failed" error
- Check if backend is running
- Verify `JWT_SECRET_KEY` is set in Render
- Check Render logs for errors

### Google OAuth not working
- Verify `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are set
- Check redirect URI matches exactly in Google Console
- Ensure Google+ API is enabled in Google Cloud

### Chat not working
- Verify `GEMINI_API_KEY` is set and valid
- Check Render logs for API errors
- Ensure JWT token is being sent with requests

### CORS errors
- Backend already configured for CORS
- Check if frontend URL matches backend expectations

---

## 📞 Support

For issues:
1. Check Render logs: `Dashboard → Service → Logs`
2. Check browser console for frontend errors
3. Verify all environment variables are set
4. Test backend endpoints directly using Postman/curl

---

## 🎉 Quick Start Commands

```bash
# Deploy backend changes
cd server
git add .
git commit -m "Update backend"
git push origin main

# Deploy frontend
cd client
npm run build
vercel --prod

# Test locally
# Terminal 1: Backend
cd server && python server.py

# Terminal 2: Frontend
cd client && npm start
```

---

**🎯 Your backend is ready to go! Just add the environment variables and push the changes.**
