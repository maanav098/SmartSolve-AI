# 🔴 IMPORTANT: Add These Redirect URIs to Google Cloud Console

## ⚠️ Required for Google OAuth to Work

### Step-by-Step Instructions:

1. **Go to Google Cloud Console:**
   - Open: [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
   - Sign in with your Google account

2. **Find Your OAuth Client:**
   - Look for your OAuth 2.0 Client ID in the list
   - Click on the client name to edit it

3. **Add Redirect URIs:**
   - Scroll down to **"Authorized redirect URIs"**
   - Click **"+ ADD URI"**
   
   **Add this for LOCAL testing:**
   ```
   http://localhost:5000/auth/google/callback
   ```
   
   Click **"+ ADD URI"** again
   
   **Add this for PRODUCTION (Render):**
   ```
   https://smartsolve-ai.onrender.com/auth/google/callback
   ```

4. **Save Changes:**
   - Click **"SAVE"** at the bottom
   - Wait for confirmation

---

## 🎯 Your OAuth Client Details:

```
Client ID: YOUR_GOOGLE_CLIENT_ID_HERE
Client Secret: YOUR_GOOGLE_CLIENT_SECRET_HERE
```

**Note:** Use your actual Google OAuth credentials from Google Cloud Console.

---

## ✅ Redirect URIs to Add:

### Local Development:
```
http://localhost:5000/auth/google/callback
```

### Production (Render):
```
https://smartsolve-ai.onrender.com/auth/google/callback
```

### Optional (If you deploy frontend separately):
```
https://your-frontend-url.vercel.app/auth/callback
```

---

## 🧪 Testing After Adding URIs:

### Local Test:
1. Make sure server is running: `python server.py`
2. Start frontend: `npm start`
3. Go to: `http://localhost:3000`
4. Click "Continue with Google"
5. Should redirect to Google login
6. After login, should redirect back to your app

### Production Test:
1. Deploy to Render
2. Add environment variables in Render
3. Go to your deployed frontend
4. Click "Continue with Google"
5. Should work without redirect_uri_mismatch error

---

## ⚠️ Common Errors if URIs Not Added:

### Error: "redirect_uri_mismatch"
```
Error 400: redirect_uri_mismatch
The redirect URI in the request, http://localhost:5000/auth/google/callback, 
does not match the ones authorized for the OAuth client.
```

**Solution:** Add the exact redirect URI to Google Console

### Error: "invalid_request"
```
Error 400: invalid_request
Missing required parameter: redirect_uri
```

**Solution:** Check that redirect URI is configured correctly

---

## 📋 Quick Checklist:

Before testing Google OAuth:

- [ ] Google Cloud Console opened
- [ ] OAuth Client ID found and clicked
- [ ] Added: `http://localhost:5000/auth/google/callback`
- [ ] Added: `https://smartsolve-ai.onrender.com/auth/google/callback`
- [ ] Clicked "SAVE"
- [ ] Waited for confirmation message

---

## 🎉 After Adding URIs:

Your Google OAuth will work perfectly! You can then:
- ✅ Test login with Google locally
- ✅ Deploy to Render with Google OAuth working
- ✅ Users can sign in with their Google accounts

---

**Don't forget this step! It's required for Google OAuth to function.** 🚀
