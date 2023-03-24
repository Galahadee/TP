import Users from "../../data/users.json";
import { CONNEXION, DECONNEXION,MODIF_USER } from "../constants/actions";
import bcrypt from "bcryptjs-react";

let stateInit = {type:"",message:""};

function searchUserByEmail(email, password) {
    const currUser = Users.find(user => email == user.email)
    const salt = bcrypt.genSaltSync(10)
    const test = bcrypt.compareSync('password', salt);
    // console.log(test)
    if (currUser) {
        return currUser
    } else {
        console.error('Nobody in database with this email.')
    }
}

function searchUserById(id) {
    const currUser = Users.find(user => id == user.id)

    if (currUser) {
        return currUser
    } else {
        console.error('Nobody in database with this ID.')
    }
}
// const navigate = useNavigate();

let reducerCurrentUser = (state = stateInit, action = {}) => {
    const payload = action.payload
    switch (action.type) {
        case CONNEXION:
            const currUser = searchUserByEmail(payload.email, payload.password)
            if (currUser) {
                localStorage.setItem('currentUser', JSON.stringify(currUser));
                return {...state,type:"success",message:"Bienvenue sur l'Intranet"}
            }

            const e = {...state,type:"error",message:"Mot de passe ou email invalide."};
            console.log(e);
            return e;
        case DECONNEXION:
            localStorage.clear();
            return {...state,type:"success",message:"Vous avez été déconnecté"};
        case MODIF_USER:
            // const currentUser=searchUserById(payload.id);
            console.log(payload.user.password)
            const obj=payload.user
            if (!obj.birthdate || !obj.photo || !obj.firstname || !obj.phone || !obj.email || !obj.country || !obj.lastname || !obj.category || !obj.gender || !obj.city) {
                return console.error("Missing value")
            }
            if (obj.password.length > 0 && obj.password.length < 8) {

                if (obj.password != payload.confirmation) {
                    console.log("test")
                    return {...state,type:"error",message:"Le champs mot de passe et confirmation ne sont pas similaire"};
                }
                return {...state,type:"error",message:"Le mot de passe n'est pas assez long"}
            }

            localStorage.removeItem("currentUser");
            localStorage.setItem('currentUser',JSON.stringify(payload))

            const test = localStorage.getItem('currentUser');
            console.log(test)

            return {...state,type:"success",message:"Les informations de votre compte ont été modifié"};
        default:
            return state;
    }
    return state
}

export default reducerCurrentUser;