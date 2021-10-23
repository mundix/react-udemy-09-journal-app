import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../component/login/LoginScreen';
import { RegisterScreen } from '../component/login/RegisterScreen';
/**
 * // ROUTER ... no va 
 * path='/auth/login'
 * no exact
 * component= LoginScreen
 * 
 * path="auth/register"
 * no exact
 * component RegisterScreen
 * 
 */
export const AuthRouter = () => {
    return (
        <Switch>
            <Route path='/auth/login' component={LoginScreen} />
            <Route path='/auth/register' component={RegisterScreen} />
            <Redirect to='/auth/login' />
        </Switch>
    )
}
