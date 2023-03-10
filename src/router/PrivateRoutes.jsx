import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context";

export const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const { state } = useContext(AppContext);

  return !token && !state.logged ? <Navigate to="/" replace /> : <Outlet />;
};
