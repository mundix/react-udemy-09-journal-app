import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
    /**
     * {
     *      name: 'Edmundo',
     *      email: 'ce.pichardo@gmail.com',
     *      passwrod: '12345',
     *      password2: '12345' 
     * }
     * useForm
     * const handleRegister = (e) => {
     *  
     * }
     */
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, password2);
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>
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
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}

                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button 
                    type='submit' 
                    className="btn btn-primary btn-block mb-5" 
                    // disabled={true}
                    >
                    Register
                </button>


                
                <Link className="link"
                    to='/auth/login'
                >
                    Already Register?
                </Link>
            </form>
        </>
    )
}
