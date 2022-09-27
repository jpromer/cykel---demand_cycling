import { combineReducers } from "redux";
import bikeReducer from "./bike.reducer";
import loginReducer from "./login.reducer";

//importar Reducers

const rootReducers = combineReducers({ loginReducer, bikeReducer });

export default rootReducers;
