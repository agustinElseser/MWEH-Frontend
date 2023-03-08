import Alerta from "../components/Alerta.jsx";
import { useEffect, useState } from "react";
import Contacto from "./Contacto.jsx";

const Fooder = () => {
  return (
    <>
      <div className="fooder">
        <Contacto />
        <p className="text7">
          Developed by Agustin Elseser ® 2023. All rights reserved.
        </p>
        <br />
        <br />
      </div>
    </>
  );
};

export default Fooder;
