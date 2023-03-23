import {
    CONNEXION,
    DECONNEXION,
    MODIF_USER
} from '../constants/actions';

// Reducer CurrentUser
export const connexion = (payload) => {
    return {
        type: CONNEXION, payload
    };
}
export const deconnexion = () => {
    return {
        type: DECONNEXION
    };
}

export const modifUser = (payload) => {
    return {
        type: MODIF_USER, payload
    };
}