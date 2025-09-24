"use client"
import { useAuthStatus } from "@/services/queries/Profile";
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const { data: authData, error, isPending, isLoading, refetch } = useAuthStatus();
  
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (authData) {
      setUser(authData.data); 
      setIsAuthenticated(true);
    } else if (error) {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, [authData, error]);

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const checkAuthStatus = () => {
    refetch();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        authLoading: isLoading || isPending,
        authError: error,
        logout,
        checkAuthStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export default AuthContextProvider;