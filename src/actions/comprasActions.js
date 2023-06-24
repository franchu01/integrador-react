import { CLEAR_COMPRAS, ADD_TO_COMPRAS } from "../types";

export const addToCompras = (id) => ({ type: ADD_TO_COMPRAS, payload: id });
export const clearCompras = () => ({ type: CLEAR_COMPRAS });
