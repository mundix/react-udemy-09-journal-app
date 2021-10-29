import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-confi';
import { types } from '../types/types';

//? Prinmer accion async, la diferencia es que esta func regresara un callback () =>{ }
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Pedro'))
        }, 3500);
    }
}
// ?  Tarea Async 
export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
        // Esto Responde con user Credentials 
        // .then(userCredentials => {  
        .then(({user}) => {  
            // console.log(userCredentials);
            dispatch(login(user.uid, user.displayName))
        })
    }
}

// Esta es la forma corta en ves de usar return le ponemos ( ... )
export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)