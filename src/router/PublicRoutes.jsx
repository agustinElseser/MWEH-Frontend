import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context";

export const PublicRoutes = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/admin" replace /> : <Outlet />;
};
