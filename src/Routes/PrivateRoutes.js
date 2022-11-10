import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider/AuthProvider'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return <span className="countdown font-mono text-6xl">
    <span style={{"--value":20}}></span>
  </span>
  }
  if (user) {
    return children
  }
  return <Navigate state={{ from: location }} replace></Navigate>
}

export default PrivateRoutes
