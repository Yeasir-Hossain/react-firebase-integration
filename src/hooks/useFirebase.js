/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import App from '../App';


const auth = getAuth(App)
const googleprovider = new GoogleAuthProvider();
const useFirebase= () =>{
    const [user,setUser] = useState({}); 

    const signInWithGoogle = () =>{
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

    useEffect(()=> {
        onAuthStateChanged(auth,user=>{
            setUser(user);
        })
    },[])

    return {user,signInWithGoogle}
}
export default useFirebase;
