import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import './login.css'
import Leftdown from "./left-right/left";
import Rightdown from "./left-right/right";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Footer from "./footer/footer";
// import Low from "./low-content/low"; // removed unused
// import { ReactComponent as Icon } from "../assets/icons/metaicon.svg"; // removed unused
import { useDarkMode } from "../Darkmode/darkmodecontext";
import DarkModeToggle from "../Darkmode/darkmodetoggle";
import React, { useState, useCallback, memo } from "react";
import { startProgress, doneProgress } from "../nprogress-config"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" className="copyright">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/maanav098" target="_blank" rel="noopener noreferrer">
        Maanav
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const LoginPage: React.FC = memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const { login, loginWithGoogle, error, loading } = useAuth();
  const { darkMode } = useDarkMode();

  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleGoogleLogin = useCallback(async () => {
    try {
      startProgress();
      setErrorMessage("");
      await loginWithGoogle();
    } catch (error: any) {
      setErrorMessage(error.message || "Google authentication failed");
    } finally {
      doneProgress();
    }
  }, [loginWithGoogle]);



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    startProgress();
    setErrorMessage("");

    try {
      await login(email, password);
      navigate("/home");
    } catch (error: any) {
      setErrorMessage(error.message || "Login failed. Please try again.");
    } finally {
      doneProgress();
    }
  };

  return (
    <div className={`loginpage ${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
        <div className="main">
          <div className="form">
            <div className="title">
              Smartsolve AI
              <br />
              <span>Sign in to start solving with AI</span>
            </div>
            <div className="theme-toggle">
              <DarkModeToggle />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit" className="button-confirm">LOGIN</button>
              <div className="login-divider">
                <span>Or</span>
              </div>
              <div className="login-with">
                <div className="button-log google-login" onClick={handleGoogleLogin} title="Login with Google">
                  <svg
                    height="20px"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Continue with Google</span>
                </div>
              </div>
              <div className="test-credentials">
                <p>Test Credentials:</p>
                <small>Email: test@nagarro.com</small>
                <br />
                <small>Password: test123</small>
              </div>
            </form>
            <Copyright />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
});

LoginPage.displayName = 'LoginPage';

export default LoginPage;
