import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setToken(parsed.token || null);
        setUsername(parsed.username || null);
      } catch {}
    }
  }, []);

  const login = (tok, user) => {
    setToken(tok);
    setUsername(user || "admin");
    localStorage.setItem("auth", JSON.stringify({ token: tok, username: user || "admin" }));
  };

  const logout = () => {
    setToken(null);
    setUsername(null);
    localStorage.removeItem("auth");
  };

  const value = useMemo(() => ({ token, username, login, logout, isAuthenticated: Boolean(token) }), [token, username]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
