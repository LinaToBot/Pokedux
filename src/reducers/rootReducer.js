import { combineReducers } from "redux-immutable"; // si no usaramos immutable solo se necesitaria combineReducers desde redux, pero como lo estamos usando se debe importar desde : npm i redux-immutable
import { pokemonsReducer } from "./pokemon";
import { uiReducer } from "./ui";

export const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});
