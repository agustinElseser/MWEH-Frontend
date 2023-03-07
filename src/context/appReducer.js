import { types } from "../types/types";

export const initialState = {
  logged: false,
  user: {},
  proyects: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      const myProyects = state.proyects.filter((proyect) => {
        if (proyect.user === action.payload._id) {
          return proyect;
        }
      });

      const myFavourites = state.proyects.filter((proyecto) => {
        return action.payload.favourite.includes(proyecto._id);
      });

      return {
        logged: true,
        user: {
          _id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
          token: action.payload.token,
          myProyects: myProyects,
          favourites: myFavourites,
        },
        proyects: [...state.proyects],
      };

    case types.logout:
      return { ...state, logged: false, user: {} };

    case types.setProyects:
      return { ...state, proyects: action.payload };

    case types.editProyect:
      const proyectsAct = state.proyects.map((proyect) => {
        if (proyect._id === action.payload._id) {
          return action.payload;
        }
        return proyect;
      });

      return { ...state, proyects: proyectsAct };

    case types.updateProfile:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name || state.user.name,
          email: action.payload.email || state.user.email,
        },
      };

    case types.myProyects:
      const myProyectsAct = state.proyects.filter((proyect) => {
        if (proyect.user === action.payload._id) {
          return proyect;
        }
      });

      return { ...state, user: { ...state.user, myProyects: myProyectsAct } };

    case types.myFavourites:
      const Favourites = state.proyects.filter((proyecto) => {
        return action.payload.favourite.includes(proyecto._id);
      });
      return {
        ...state,
        user: { ...state.user, favourites: Favourites },
      };

    case types.addProyect:
      return {
        ...state,
        proyects: [...state.proyects, action.payload],
      };

    case types.deleteProyect:
      const newProjects = state.proyects.filter((proyect) => {
        if (proyect._id !== action.payload.id) {
          return proyect;
        }
      });

      return {
        ...state,
        proyects: newProjects,
      };

    default:
      return state;
  }
};
