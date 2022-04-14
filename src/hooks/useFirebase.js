/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase.init';



const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    const handleSignout = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    return {
        user,
        signInWithGoogle,
        handleSignout
    }
}
export default useFirebase;
