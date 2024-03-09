// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import axios from "axios";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${apiUrl}/user/login`,
        {
          email,
          password,
        }
      );

      const userData = response.data;
      setUser(userData);

      return true;
    } catch (error) {
      console.error("Login failed:", error);

      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
