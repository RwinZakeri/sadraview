import React from 'react';

// toastify alert

//css
import './AuthRegister.css'
import { Button, TextField } from '@mui/material';
import AuthForm from '../components/modules/AuthModules/AuthForm';

const AuthLogin = () => {

    const handleLogin = () => {
        // Add your login logic here
        console.log('Login button clicked');
    };

    return (
        <div className='authDiv'>
            <h2>Login</h2>
            <AuthForm/>
        </div>
    );
};

export default AuthLogin;