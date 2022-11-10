import React, { createContext, useEffect, useState } from 'react'
import app from '../../firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googlePopUp = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
      .then(() => {})
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribed
    }
  }, [])

  const authInformation = {
    user,
    loading,
    createUser,
    login,
    logOut,
    googlePopUp,
  }
  return (
    <div>
      <AuthContext.Provider value={authInformation}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
