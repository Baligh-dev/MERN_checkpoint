import { combineReducers } from "redux";
import contactReducer from "./contact";
import editReducer from "./edit";
const rootReducer = combineReducers({ contactReducer, editReducer });

export default rootReducer;
