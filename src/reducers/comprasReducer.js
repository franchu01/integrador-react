import { ADD_TO_COMPRAS, CLEAR_COMPRAS } from "../types";

export const initialState = {
  compras: [],
};

export const comprasReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_COMPRAS: {
      return { ...state, compras: [...state.compras, action.payload] };
    }
    case CLEAR_COMPRAS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
