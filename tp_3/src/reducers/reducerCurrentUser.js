import Users from "../../data/users.json";
import { CONNEXION, DECONNEXION } from "../constants/actions";
import bcrypt from "bcryptjs"

let stateInit = {};

function searchUser(email, password) {
    console.log(email)
    const currUser = Users.find(user => email == user.email)
    if (currUser) {
        return currUser
    } else {
        console.log('Nobody')
    }
}
// const navigate = useNavigate();

let reducerCurrentUser = (state = stateInit, action = {}) => {
    const payload = action.payload
    switch (action.type) {
        case CONNEXION:
            console.log('test')
            const currUser = searchUser(payload.email, payload.password)
            if (currUser) {
                sessionStorage.setItem('currentUser', JSON.stringify(currUser));
                console.log(sessionStorage.getItem("currentUser"))
            }

            return state;
        case DECONNEXION:
            sessionStorage.clear();
            return state;
        default:
            return state;
    }
    return state
}

export default reducerCurrentUser;