// Simple Authentication Service
import axios from 'axios';

const API_BASE_URL = 'https://smartsolve-ai.onrender.com';

interface User {
  email: string;
  name: string;
  provider: string;
}

interface AuthResponse {
  access_token: string;
  user: User;
  message: string;
}

class SimpleAuthService {
  private accessToken: string | null = null;

  constructor() {
    // Initialize token from localStorage
    this.accessToken = localStorage.getItem('access_token');
    this.setupAxiosInterceptors();
  }

  private setupAxiosInterceptors() {
    // Request interceptor to add auth header
    axios.interceptors.request.use((config) => {
      if (this.accessToken && config.url?.includes(API_BASE_URL)) {
        config.headers.Authorization = `Bearer ${this.accessToken}`;
      }
      return config;
    });

    // Response interceptor for auth errors
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          this.logout();
          window.location.href = '/';
        }
        return Promise.reject(error);
      }
    );
  }

  private setToken(token: string) {
    this.accessToken = token;
    localStorage.setItem('access_token', token);
  }

  private clearAuth() {
    this.accessToken = null;
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  }

  // Test login (test@nagarro.com / test123)
  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
      const { access_token, user } = response.data;
      
      this.setToken(access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  }

  // Google OAuth login
  async loginWithGoogle(): Promise<string> {
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/google`);
      return response.data.auth_url;
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Google OAuth failed');
    }
  }

  // Handle OAuth callback
  handleOAuthCallback(token: string) {
    this.setToken(token);
    
    // Decode JWT to get user info
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const user = {
        email: payload.sub,
        name: payload.name || 'Google User',
        provider: payload.provider || 'google'
      };
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Failed to parse token:', error);
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      if (this.accessToken) {
        await axios.post(`${API_BASE_URL}/auth/logout`);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      this.clearAuth();
    }
  }

  // Check authentication status
  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  // Get current user
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
    return null;
  }

  // Get access token
  getAccessToken(): string | null {
    return this.accessToken;
  }
}

export const authService = new SimpleAuthService();
export default authService;