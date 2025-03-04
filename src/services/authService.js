const baseUrl = import.meta.env.VITE_BASE_URL;
const AuthService = {
  login: async (credentials) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    if (credentials) {
      requestOptions.body = JSON.stringify(credentials);
    }
    try {
      const response = await fetch(
        `${`${baseUrl}/auth/login`}`,
        requestOptions
      );
      const body = await response.json();

      if (response.status > 399) {
        return {
          success: false,
          message: body.message,
        };
      } else {
        return {
          success: true,
          message: "Logged in successfully",
        };
      }
    } catch (e) {
      return {
        success: false,
        message: "Something went wrong.",
      };
    }
  },

  logout: async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        `${`${baseUrl}/auth/logout`}`,
        requestOptions
      );
      const body = await response.json();
      if (response.status > 399) {
        return {
          success: false,
          message: body.message,
        };
      } else {
        return {
          success: true,
          message: "Logged out successfully",
        };
      }
    } catch (e) {
      return {
        success: false,
        message: "Something went wrong.",
      };
    }
  },

  checkAuthStatus: async () => {
    try {
      const fetchResponse = await fetch(`${`${baseUrl}/auth/check`}`);
      const response = await fetchResponse.json();
      return {
        success: response.isAuthenticated,
        message: response.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response.data.message,
      };
    }
  },
};
export default AuthService;
