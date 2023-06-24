import { createStore } from "redux";
import reducer, { persistedReducer } from "../reducers";
import persistStore from "redux-persist/es/persistStore";

const store = createStore(persistedReducer);
const persistor = persistStore(store);
store.subscribe(() => console.log("Cambio el estado"));

export { store, persistor };
