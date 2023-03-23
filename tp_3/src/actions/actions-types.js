import {
    CONNEXION,
    DECONNEXION
} from '../constants/actions';

// Reducer CurrentUser
export const connexion = (payload) => {
    return {
        type: CONNEXION,payload
    };
}
export const deconnexion = () => {
    return {
        type: DECONNEXION
    };
}
