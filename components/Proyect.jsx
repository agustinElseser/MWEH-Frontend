import { useContext } from "react";
import { AppContext } from "../src/context";
import { ProyectsContext } from "../src/context/ProyectsContext";

const Proyect = ({ proyect }) => {
  const { name, arquitect, year, site, _id } = proyect;

  const { setEdit } = useContext(ProyectsContext);
  const { deleteProyect } = useContext(AppContext);

  return (
    <>
      <div>
        <hr />
        <p className="text4">
          NAME: <span> {name}</span>
        </p>
        <p className="text3">
          ARQUITECT:
          <span> {arquitect}</span>
        </p>
        <p className="text3">
          SITE:
          <span> {site}</span>
        </p>
        <div className="contain5">
          <button
            type="button"
            className="button2"
            onClick={() => setEdit(proyect)}
          >
            EDIT
          </button>
          <button
            type="button"
            className="button2"
            onClick={() => deleteProyect(_id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default Proyect;
