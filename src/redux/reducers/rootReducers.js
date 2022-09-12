import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
//importar Reducers

const rootReducers = combineReducers({ loginReducer });

export default rootReducers;
