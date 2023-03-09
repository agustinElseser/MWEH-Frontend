import { useEffect, useReducer } from "react";
import clienteAxios from "../../config/axios";
import { ProyectsProvider } from "./ProyectsProvider";
import { appReducer } from "./appReducer";
import { types } from "../types/types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "./AppContext";

const initialState = {
  logged: false,
  user: {},
  proyects: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const navigate = useNavigate();

  const exploreMain = async () => {
    try {
      const { data } = await clienteAxios.get("/proyects/explore");

      const action = {
        type: types.setProyects,
        payload: data,
      };
      dispatch(action);
    } catch (error) {}
  };

  useEffect(() => {
    const action = {
      type: types.myProyects,
      payload: state.user,
    };
    dispatch(action);
  }, [state.proyects]);

  const login = async (email, password) => {
    try {
      const { data } = await clienteAxios.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);

      const action = {
        type: types.login,
        payload: data,
      };

      dispatch(action);

      navigate("/admin");
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const autenticarUsuario = async () => {
    if (state.logged == true) {
      return;
    }
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await clienteAxios("users/profile", config);

      const action = {
        type: types.login,
        payload: data,
      };

      dispatch(action);
    } catch (error) {}
  };

  const cerraSesion = () => {
    localStorage.removeItem("token");

    const action = {
      type: types.logout,
    };

    dispatch(action);
    setTimeout(() => {
      navigate("/");
    }, 10);
  };

  const actualizarPerfil = async (datos) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setCargando(false);
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const url = `/users/profile/${datos._id}`;
      const { data } = await clienteAxios.put(url, datos, config);

      const action = {
        type: types.updateProfile,
        payload: data,
      };

      dispatch(action);
      return {
        msg: "GUARDADO CORRECTAMENTE",
      };
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const guardarPw = async (datos) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setCargando(false);
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const url = "/users/changepw";
      const { data } = await clienteAxios.put(url, datos, config);

      return {
        msg: data.msg,
      };
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const favourite = async (datos) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const url = "users/favourite";
      const { data } = await clienteAxios.put(url, datos, config);

      const action = {
        type: types.myFavourites,
        payload: data,
      };

      dispatch(action);

      return {
        msg: data.msg,
      };
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const guardarProyect = async (proyect) => {
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

        const action = {
          type: types.editProyect,
          payload: data,
        };

        dispatch(action);
        return {
          msg: "GUARDADO CORRECTAMENTE",
        };
      } catch (error) {}
    } else {
      try {
        const { data } = await clienteAxios.post("/proyects", proyect, config);

        const action = {
          type: types.addProyect,
          payload: data,
        };

        dispatch(action);
        return {
          msg: "GUARDADO CORRECTAMENTE",
        };
      } catch (error) {}
    }
  };

  const deleteProyect = async (id) => {
    const confirmar = confirm("You want to delete the project?");
    if (confirmar) {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.delete(`/proyects/${id}`, config);

        const action = {
          type: types.deleteProyect,
          payload: data,
        };

        dispatch(action);
      } catch (error) {}
    }
  };

  return (
    <AppContext.Provider
      value={{
        deleteProyect,
        guardarProyect,
        state,
        login,
        autenticarUsuario,
        cerraSesion,
        actualizarPerfil,
        guardarPw,
        exploreMain,
        favourite,
        initialState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider };
export default AppContext;
