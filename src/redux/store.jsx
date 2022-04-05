import { createStore } from "redux";
import employeeReducer from "./reducers/employeeReducer";
//pour connecter le sotre à dev tools
//const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



export const store = createStore(employeeReducer)