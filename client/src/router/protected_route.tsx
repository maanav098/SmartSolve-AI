import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import { CircularProgress, Box } from "@mui/material";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
