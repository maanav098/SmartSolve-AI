import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authService } from './oauthService';
import { CircularProgress, Box, Typography } from '@mui/material';

const OAuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const token = searchParams.get('token');

        if (token) {
          // Handle OAuth callback
          authService.handleOAuthCallback(token);
          
          // Clear URL parameters and redirect to home
          navigate('/home', { replace: true });
        } else {
          // No token found, redirect to login with error
          navigate('/?error=oauth_failed', { replace: true });
        }
      } catch (error) {
        console.error('OAuth callback error:', error);
        navigate('/?error=oauth_failed', { replace: true });
      }
    };

    handleCallback();
  }, [navigate, searchParams]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}
    >
      <CircularProgress size={60} sx={{ color: 'white', mb: 3 }} />
      <Typography variant="h5" gutterBottom>
        Completing authentication...
      </Typography>
      <Typography variant="body1" sx={{ opacity: 0.8 }}>
        Please wait while we sign you in.
      </Typography>
    </Box>
  );
};

export default OAuthCallback;