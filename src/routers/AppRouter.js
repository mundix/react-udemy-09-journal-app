import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { JournalScreen } from '../component/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

/**
 *  Route #1 
 *    { 
 *      path=/auth
 *      no exact
 *      component=AuthRouter
 *      }
 *    { 
 *      Main Route
 *      path=/
 *      exact
 *      component=JournalApp
 *      }
 * 
 */
export const AppRouter = () => {
    return (
        <Router>
            {/* Se recomienda usar el DIV para contener el SWITCH, no es obligatorio */}
            <div>
                <Switch>
                    <Route
                        path='/auth'
                        component={AuthRouter}
                    />
                    <Route
                        path='/'
                        exact
                        component={JournalScreen}
                    />
                </Switch>
            </div>
        </Router>
    )
}
