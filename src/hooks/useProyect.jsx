import { useContext } from "react";
import ProyectContext from "../context/ProyectsProvider";

const useProyects = () => {
  return useContext(ProyectContext);
};

export default useProyects;
