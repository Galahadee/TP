import { combineReducers } from "redux";
import listReducer from "./reducerList";

// console.log(listReducer)
const store = combineReducers({
  listUsers : listReducer
});


export default store;


