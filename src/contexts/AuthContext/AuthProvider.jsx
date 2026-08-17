import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { useEffect, useState } from 'react';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const { user, SetUser } = useState(null);
    const { loading, setLoading } = useState(true);




    const registerUser = (email, password) => {

        loading(true);

        console.log("Register email:", email);
        console.log("Register password:", password);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {

        loading(true);

        return signInWithEmailAndPassword(auth, email, password)
    }


    const signInWithGoogle = () => {

        loading(true);

        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {

    }, [])


    const authInfo = {
        registerUser,
        signInUser,
        signInWithGoogle
    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;