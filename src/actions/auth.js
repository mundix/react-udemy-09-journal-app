// Esto es una action 
import { types } from '../types/types';

// Esta es la forma corta en ves de usar return le ponemos ( ... )
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});