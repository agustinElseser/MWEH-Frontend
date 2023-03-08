import { useLayoutEffect, useState } from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";

const AdministrarProyectos = () => {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function actualizarViewportSize() {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", actualizarViewportSize);
    actualizarViewportSize();

    return () => window.removeEventListener("resize", actualizarViewportSize);
  }, []);

  return (
    <>
      <div
        className={
          viewportSize.width >= 800 ? "container3 " : "container3 containFav"
        }
      >
        <Lista />
        <Formulario />
      </div>
    </>
  );
};

export default AdministrarProyectos;
