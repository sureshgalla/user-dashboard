import { combineReducers } from "redux";
import data from "./loadDataReducer";

const rootReducer = combineReducers({
  data,
});

export default rootReducer;
