import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context";

export const PrivateRoutes = () => {
  const { state } = useContext(AppContext);

  return state.logged === false ? <Navigate to="/" replace /> : <Outlet />;
};
