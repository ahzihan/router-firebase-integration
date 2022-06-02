import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInGoogle } = useFirebase();
    return (
        <div>
            <h3>Login Form</h3>
            <form>
                <input type="email" name="" id="email" placeholder='email address' /><br />
                <input type="password" name="" id="password" placeholder='password' /><br />
                <button>Login</button><br />
            </form>
            <div>
                <button onClick={signInGoogle}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;