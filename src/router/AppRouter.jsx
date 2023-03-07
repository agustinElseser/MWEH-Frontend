import { useContext, useEffect } from "react";
import { Navigate, NavLink, Outlet, Route, Routes } from "react-router-dom";
import AdministrarProyectos from "../../paginas/AdministrarProyectos";
import CambiarPw from "../../paginas/CambiarPw";
import ConfirmarCuenta from "../../paginas/ConfirmarCuenta";
import EditProfile from "../../paginas/EditProfile";
import Explorar from "../../paginas/Explorar";
import Favoritos from "../../paginas/Favoritos";
import Login from "../../paginas/Login";
import NuevoPW from "../../paginas/NuevoPW";
import OlvidePassword from "../../paginas/OlvidePassword";
import Registrar from "../../paginas/Registrar";
import { AppContext } from "../context/AppContext";
import { ProyectsContext } from "../context/ProyectsContext";
import AuthLayout from "../layout/AuthLayout";
import Privated from "../layout/Privated";

export const AppRouter = () => {
  const { state, exploreMain, autenticarUsuario } = useContext(AppContext);
  console.log(state);

  useEffect(() => {
    if (state.logged == false) {
      //Y Agregar si hay token en local storage
      autenticarUsuario();
      exploreMain();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registrar />} />
          <Route path="reset-password" element={<OlvidePassword />} />
          <Route path="reset-password/:token" element={<NuevoPW />} />
          <Route path="confirm/:token" element={<ConfirmarCuenta />} />
          <Route path="proyect/:id" element={<Explorar />} />
        </Route>
      </Routes>
      {state.logged && (
        <Routes>
          <Route path="/admin" element={<Privated />}>
            <Route path="profile" element={<EditProfile />} />
            <Route path="myProyects" element={<AdministrarProyectos />} />
            <Route path="reset-pw" element={<CambiarPw />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
