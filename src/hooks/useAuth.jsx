import { useContext, useEffect, createContext, useState } from "react";
import AuthService from "../services/authService";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return Cookies.get("isAuthenticated") === "true";
  });

  useEffect(() => {
    if (isAuthenticated) {
      Cookies.set("isAuthenticated", "true", { expires: 3 });
    }
  }, [isAuthenticated]);

  const login = async (credentials) => {
    try {
      const response = await AuthService.login(credentials);
      if (response.success) {
        setIsAuthenticated(true);
      }
      return response;
    } catch (e) {
      return {
        success: false,
        message: "Something went wrong.",
      };
    }
  };

  const logout = async () => {
    try {
      const response = await AuthService.logout();
      if (response.success) {
        setIsAuthenticated(false);
        Cookies.remove("isAuthenticated");
      }
      return response;
    } catch (e) {
      return {
        success: false,
        message: "Something went wrong.",
      };
    }
  };

  const checkAuthStatus = async () => {
    try {
      const response = await AuthService.checkAuthStatus();

      if (response.status === 200) {
        setIsAuthenticated(true);
      } else {
        Cookies.remove("isAuthenticated");
        setIsAuthenticated(false);
      }
      return {
        success: response.isAuthenticated,
        message: response.message,
      };
    } catch (e) {
      Cookies.remove("isAuthenticated");
      setIsAuthenticated(false);
      return {
        success: false,
        message: e.body.message,
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, checkAuthStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthProvider, useAuth };
