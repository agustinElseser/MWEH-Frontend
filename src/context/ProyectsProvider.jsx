import { createContext, useState, useContext, useReducer } from "react";
import clienteAxios from "../../config/axios";
import { types } from "../types/types";
import AppContext from "./AppProvider";
import { proyectReducer, initialState } from "./proyectReducer";
import { ProyectsContext } from "./ProyectsContext";

const ProyectContext = createContext();

export const ProyectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(proyectReducer, initialState);
  const { exploreMain, autenticarUsuario } = useContext(AppContext);

  const [proyects, setProyects] = useState([]);
  const [proyect, setProyect] = useState({});
  const [favouritesProyect, setFavouritesProyect] = useState([]);

  const setEdit = (proyect) => {
    const action = {
      type: types.edit,
      payload: proyect,
    };
    dispatch(action);
  };

  const favouriteProyects = async (proyect) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (proyect.id) {
      try {
        const { data } = await clienteAxios.put(
          `/proyects/${proyect.id}`,
          proyect,
          config
        );
        const proyectsEdit = proyects.map((proyectState) =>
          proyectState._id === data._id ? data : proyectState
        );
        setProyects(proyectsEdit);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await clienteAxios.post("/proyects", proyect, config);

        const { createdAt, updatedAt, __v, ...proyectSave } = data;
        setProyects([proyectSave, ...proyects]);
      } catch (error) {}
    }
  };

  return (
    <ProyectsContext.Provider
      value={{
        state,
        proyects,
        setEdit,
        proyect,
        setProyect,
        setProyects,
        favouritesProyect,
        setFavouritesProyect,
      }}
    >
      {children}
    </ProyectsContext.Provider>
  );
};

export default ProyectContext;
