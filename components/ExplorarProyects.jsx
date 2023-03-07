import { useContext } from "react";
import { AppContext } from "../src/context/AppContext";
import CardProyect from "./CardProyect";

const MostrarProyectos = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <div className="contain7">
        <>
          {state.proyects.map((proyect) => (
            <CardProyect key={proyect._id} proyect={proyect} />
          ))}
          <></>
        </>
      </div>
    </>
  );
};

export default MostrarProyectos;
