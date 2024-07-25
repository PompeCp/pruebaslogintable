import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "./Authprovider";

export default function  ProtectedRoute() {
    const {isAuthenticated}  = useAuth()
  return isAuthenticated ? <Outlet/> : <Navigate to ="/"/>;
}
