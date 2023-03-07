import Alerta from "../components/Alerta.jsx";
import { useEffect, useState } from "react";
import Contacto from "./Contacto.jsx";

const Fooder = () => {
  return (
    <>
      <div className="fooder">
        <Contacto />
        <p className="text7">
          Desarrollado por Agustin Elseser ® 2022. Todos los derechos
          reservados.
        </p>
      </div>
    </>
  );
};

export default Fooder;
