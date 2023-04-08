import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { toggleLogReducer } from "./toggleLogReducer";

const reducer = combineReducers({
  cart: cartReducer,
  toggleLog: toggleLogReducer,
});

export default reducer;
