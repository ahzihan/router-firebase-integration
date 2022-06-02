import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase.init';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth( app );
const useFirebase = () => {
    const [ user, setUser ] = useState( {} );


    const signInGoogle = () => {
        signInWithPopup( auth, googleProvider )
            .then( result => {
                const user = result.user;
                setUser( user );
                console.log( user );
            } ).catch( error => {
                console.error( error );
            } );
    };
    const handleSignOut = () => {
        signOut( auth )
            .then( () => { } );
    };

    useEffect( () => {
        onAuthStateChanged( auth, user => {
            setUser( user );
        } );
    }, [] );

    return { user, signInGoogle, handleSignOut };
};
export default useFirebase;