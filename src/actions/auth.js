import { types } from '../types/types';

//? Prinmer accion async, la diferencia es que esta func regresara un callback () =>{ }
export const startLoginEmailPassword = (email, password) => {
    // El dispatch viene en el callback para poder ejecutarse .
    return (dispatch) => {
        // ? Se pueden hacer varios dispatch simultaneamente aqui ...
        
        setTimeout(() => {
            dispatch(login(123, 'Pedro'));
        }, 3500);
    }
}

// Esta es la forma corta en ves de usar return le ponemos ( ... )
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});