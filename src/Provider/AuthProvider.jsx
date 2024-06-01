import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { set } from "firebase/database";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError]=useState('')
    const [loading, setLoading] = useState(true);

    const createUser= (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const createLogin= (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged (auth, (currentUser) =>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false);
        })
        return()=>{
            return unsubscribe();
        }
    },[])
    const info = {
        user,
        error,
        setError,
        createUser,
        createLogin,

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;