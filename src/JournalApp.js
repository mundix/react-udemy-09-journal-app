import React from 'react';
import { Provider } from 'react-redux'; //* Ojo react redux para usar el provider 

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

//* Se aplicara el store de Redux dentro del provider 
export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
