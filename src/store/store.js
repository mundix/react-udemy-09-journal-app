
import { createStore, combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';

//? Este reducer es el que le voy a enviar a mi cerate store 
//* puedes poner mas de un reducer 
const reducers = combineReducers({
    auth: authReducer,
});

// Lo importaremos en el punto mas alto de la app , JournalApp
export const store = createStore(reducers);