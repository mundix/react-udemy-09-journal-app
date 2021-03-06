import React from 'react';
import { Link } from 'react-router-dom';
// ?para hacer el dispatch se usa un hook que react redux me facilita
import {useDispatch} from 'react-redux'; 
import { useForm } from '../../hooks/useForm';
// import { login } from '../../actions/auth';
import {  startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch(); //da acceso al dispatch , sirve para hacer dispatch de acciones

    const [formValue, handleInputChange] = useForm({
        email: 'ce.pichardo@gmail.com',
        password: '123456'
    });

    const { email, password } = formValue;

    const handleLogin = (e) => {
        e.preventDefault();
        // dispatch(login(12345, 'Hernando')); //importado de las acciones 
        dispatch(startLoginEmailPassword(email, password)); //importado de las acciones 

        //? Como hago un dispatch a una action a mi store, 
        //? primero hay que crear la action en el forlder actions que debo crear si no existe 
        //? Acciones que tieneq ue ver con auth, con el journal con interfaz de usaurio etc...

    }

    const handleGoogleLogin = () => {
        // Exporta la accion el metodo startGoogleLogin 
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type='submit'
                    className="btn btn-primary btn-block"
                // disabled={true}
                >
                    Login
                </button>


                <div className="auth__social-networks">
                    <p>Login With Social Network</p>
                </div>
                <div
                    className="google-btn"
                    onClick={handleGoogleLogin}
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
                <Link className="link"
                    to='/auth/register'
                >
                    Create New Account
                </Link>
            </form>
        </>
    )
}
