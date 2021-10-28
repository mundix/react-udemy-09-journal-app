
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//? Este reducer es el que le voy a enviar a mi cerate store 
//* puedes poner mas de un reducer 
const reducers = combineReducers({
    auth: authReducer,
});

//* Lo importaremos en el punto mas alto de la app , JournalApp 
export const store = createStore(
    reducers,

    // Cone sto se trabaja acciones async 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);