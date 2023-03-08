import { Outlet, Navigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../../components/Header";
import Fooder from "../../components/Fooder";
import SimpleSlider2 from "../../components/Slider2";
import { useContext, useEffect, useState } from "react";
import Lista from "../../components/Lista";
import AdministrarProyectos from "../../paginas/AdministrarProyectos";
import AppContext, { AppProvider } from "../context/AppProvider";
import clienteAxios from "../../config/axios";
import Formulario from "../../components/Formulario";
import MenuPrivate from "../../components/MenuPrivate";

const Privated = ({ children }) => {
  const { state, autenticarUsuario } = useContext(AppContext);

  const [misProyects, setMisProyects] = useState([]);

  useEffect(() => {
    //autenticarUsuario();
  }, []);

  const obtenerMisProyects = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios("/proyects", config);

      setMisProyects(data);
    } catch (error) {}
  };

  return (
    <>
      <div id="a0">
        <div className="a1">
          <SimpleSlider2 />
        </div>
        <MenuPrivate className="mobile-only" />
        <div className="container2">
          <Header />

          <Outlet />

          <p className="text8">
            Developed by Agustin Elseser ® 2023. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privated;
