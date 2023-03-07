import { types } from "../types/types";

export const initialState = {
  select: false,
  proyect: {
    name: "",
    arquitect: "",
    area: "",
    site: "",
    year: "",
    id: "",
    proyectImg: [],
  },
};

export const proyectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.edit:
      return { select: true, proyect: action.payload };

    case types.delete:
      return { ...state };

    default:
      return state;
  }
};
