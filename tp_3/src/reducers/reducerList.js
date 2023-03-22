// import { ADD_DRAGON,DELETE_DRAGON } from "../constants/dragon";
// import { ORDER_CHANGE } from "../constants/orderChange";
import Users from "../../data/users.json";


  let stateInit =Users;

let reducerList = (state = stateInit, action = {}) => {
    const payload=action.payload
    switch (action.type) {    
        default:
            return state;
    }
    return state
}

export default reducerList;