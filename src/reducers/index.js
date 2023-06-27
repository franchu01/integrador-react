import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { toggleLogReducer } from "./toggleLogReducer";
import { logUserReducer } from "./logUserReducer";
import { comprasReducer } from "./comprasReducer";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["comprasReducer"],
};

const reducer = combineReducers({
  cart: cartReducer,
  toggleLog: toggleLogReducer,
  logUser: logUserReducer,
  compras: comprasReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducer);

export default reducer;
