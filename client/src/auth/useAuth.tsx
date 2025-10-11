import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authService } from "./oauthService";

interface User {
  email: string;
  name: string;
  provider: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize authentication state
  useEffect(() => {
    const initializeAuth = () => {
      try {
        if (authService.isAuthenticated()) {
          const currentUser = authService.getCurrentUser();
          if (currentUser) {
            setUser(currentUser);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        authService.logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const clearError = () => setError(null);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(email, password);
      setUser(response.user);
      setIsAuthenticated(true);
    } catch (error: any) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };



  const loginWithGoogle = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const authUrl = await authService.loginWithGoogle();
      window.location.href = authUrl;
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
      throw error;
    }
  };



  const logout = async (): Promise<void> => {
    setLoading(true);
    try {
      await authService.logout();
      setIsAuthenticated(false);
      setUser(null);
      setError(null);
    } catch (error: any) {
      console.error("Logout error:", error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    loginWithGoogle,
    logout,
    loading,
    error,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
