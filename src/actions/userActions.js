import { LOG_IN_USER, LOG_OUT_USER } from "../types";

export const logInUser = () => ({ type: LOG_IN_USER });
export const logOutUser = () => ({ type: LOG_OUT_USER });
