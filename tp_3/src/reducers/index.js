import { combineReducers } from "redux";
import listReducer from "./reducerList";
import reducerCurrentUser from './reducerCurrentUser';

const store = combineReducers({
  listUsers : listReducer,
  currentUser : reducerCurrentUser
});

export default store;


