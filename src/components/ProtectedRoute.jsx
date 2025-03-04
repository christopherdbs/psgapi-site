import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "../hooks/useToast";
export const ProtectedRoute = (props) => {
  const { isAuthenticated, checkAuthStatus } = useAuth();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const verifyAuth = async () => {
      const response = await checkAuthStatus();
      showToast(response.success, response.message);
      setLoading(false);
    };

    verifyAuth();
  }, []);

  if (loading) {
    return <></>;
  }
  return isAuthenticated ? <props.page /> : <Navigate to="/login" />;
};
