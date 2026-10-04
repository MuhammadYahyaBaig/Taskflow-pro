import { createContext, useContext, useState } from "react";

const API ="http://localhost:5000/api/auth";
const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    try{
      const savedUser = localStorage.getItem("Taskflow_user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem("Taskflow_token")|| null;
    } catch (error) {
      return null;
    }
  });

  const login = async (email, password) => {
    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        return { success: false, message: data.message };
      }

      localStorage.setItem("Taskflow_token", data.token);
      localStorage.setItem(
        "Taskflow_user",
        JSON.stringify(data.user)
      );
      setUser(data.user);
      setToken(data.token);

      return { success: true };
    } catch (error) {
      return { success: false, message: "An error occurred during login." };
    }
  };


  const register = async (name, email, password) => {
    try {
      const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        return{ success: false, message: data.message };
      }
      localStorage.setItem("Taskflow_token", data.token);
      localStorage.setItem(
        "Taskflow_user",
        JSON.stringify((data.user))
      );
      setUser(data.user);
      setToken(data.token);
      return { success: true };
    } catch (error) {
      return { success: false, message: "An error occurred during registration." };
    }
  };

  const logout = () => {
    localStorage.removeItem("Taskflow_user");
    localStorage.removeItem("Taskflow_token");
    setUser(null);
    setToken(null);
  };

  const updateUser = (updatedData) => {
    const updatedUser = {
      ...user,
      ...updatedData,
    };

    localStorage.setItem(
      "Taskflow_user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}