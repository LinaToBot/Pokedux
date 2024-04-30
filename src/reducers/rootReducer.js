import { combineReducers } from "redux";
import dataReducer from "../slicesOrFeatures/dataSlice";
import uiReducer from "../slicesOrFeatures/uiSlice";

export const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
