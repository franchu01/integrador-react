import { CLOSE_LOGIN, OPEN_LOGIN } from "../types";

export const initialState = {
  open: false,
};

export const toggleLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN: {
      return { ...state, open: true };
    }
    case CLOSE_LOGIN: {
      return { ...state, open: false };
    }
    default: {
      return state;
    }
  }
};
