/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import useAxiosCommon from '../hooks/useAxiosCommon'
import axios from 'axios'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosCommon = useAxiosCommon();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // save user
    const saveUser = async (user) => {
        const currentUser = {
            name: user.displayName,
            email: user.email,
            role: 'make admin',
            type: 'make premium',
        }
        const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/users`, currentUser)
        return data;
    }

    // onAuthStateChange

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosCommon.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            saveUser(currentUser)
                            setLoading(false)
                        }
                    })
            } else {
                localStorage.removeItem('access-token');
                setLoading(false)
            }
        })
        return () => {
            return unsubscribe()
        }
    }, [axiosCommon]);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile,
        saveUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider