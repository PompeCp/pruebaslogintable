import { useContext, createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

interface User {
  user: any
  nombre:string
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  loginU: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  loginU: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const loginU = (token: string) => {
    try {
      const decodedUser = jwtDecode<User>(token);
      setUser(decodedUser.user ); 
      setIsAuthenticated(true);
      console.log(token)
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      loginU(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loginU, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);