import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth-state";
import { employeesReducer } from './employees-state';

const reducers = combineReducers({ authState: authReducer, employeesState: employeesReducer});
const store = createStore(reducers);

export default store;