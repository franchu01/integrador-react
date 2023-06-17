import { LOG_IN_USER, LOG_OUT_USER } from "../types";

const estaLogged = localStorage.getItem("logged");

export const initialState = {
  logged: estaLogged,
};

export const logUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_USER: {
      localStorage.setItem("logged", true);
      return { ...state, logged: true };
    }
    case LOG_OUT_USER: {
      localStorage.setItem("logged", false);
      return { ...state, logged: false };
    }
    default: {
      return state;
    }
  }
};
