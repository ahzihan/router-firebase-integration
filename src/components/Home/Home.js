import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Home.css';

const auth = getAuth( app );
const Home = () => {
    const [ user ] = useAuthState( auth );
    return (
        <div>
            <h2>Home Page</h2>
            <h5>Current User is: {user ? user.displayName : 'No Body'}</h5>
        </div>
    );
};

export default Home;