import React from 'react';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth();
const Login = () => {
    const [ signInWithGoogle, user ] = useSignInWithGoogle( auth );
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then( () => {
                navigate( from, { replace: true } );
            } );
    };
    return (
        <div>
            <h3>Login Form</h3>
            <form>
                <input type="email" name="" id="email" placeholder='email address' /><br />
                <input type="password" name="" id="password" placeholder='password' /><br />
                <button>Login</button><br />
            </form>
            <div>
                <button onClick={handleGoogleSignIn}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;