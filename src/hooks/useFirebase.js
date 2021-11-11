import React, { useState, useEffect } from 'react';
import {
    getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,
    signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken
} from "firebase/auth";
import initializeFirebase from '../Pages/Login/Login/Firebase/firebase-init';


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('')
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location.state.from || '/'
                history.replace(destination);
                // Signed in 
                setAuthError('')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [])


    return {
        user,
        isLoading,
        registerUser,
        logOut,
        authError,
        loginUser

    }
};

export default useFirebase;