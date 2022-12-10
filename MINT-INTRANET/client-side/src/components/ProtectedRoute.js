import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({token}) => {
//   if(!token){
//     return <Navigate to={redirectPath} replace />
//   }
  return token ? <Outlet /> : <Navigate to={'/'} />
}

export default ProtectedRoute
