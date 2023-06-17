import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { toggleLogReducer } from "./toggleLogReducer";
import { logUserReducer } from "./logUserReducer";

const reducer = combineReducers({
  cart: cartReducer,
  toggleLog: toggleLogReducer,
  logUser: logUserReducer,
});

export default reducer;
