import React, { useState, useEffect } from 'react';
import {
    getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,
    signInWithEmailAndPassword, GoogleAuthProvider,
} from "firebase/auth";
import initializeFirebase from '../Pages/Login/Login/Firebase/firebase-init';


initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user.email);
                hanldeUserInfoRegister(result.user.email)
                // Signed in 
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }




    //user info
    const hanldeUserInfoRegister = (email) => {
        fetch("https://shielded-tundra-20828.herokuapp.com/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };




    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }


    //is admin
    // useEffect(() => {
    //     fetch(`https://shielded-tundra-20828.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])

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
        loginUser,
        admin

    }
};

export default useFirebase;