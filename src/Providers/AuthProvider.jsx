import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google signIn 
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // GitHub SignIn 
    const gitSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }

    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }

    // profile update
    const userProfileUpdate = (displayName,photoURL) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName, photoURL})
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })

        return () =>{
            return unsubscribe();
        }
    },[])
   
    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleSignIn,
        gitSignIn,
        userProfileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;