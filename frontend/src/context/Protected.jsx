import React from 'react'
import {Navigate} from 'react-router-dom'
import { useAuth } from './AuthContext'
export default function Protected({children}) {
    const auth = useAuth();
    if(!localStorage.getItem("token")){
        return <Navigate to ="/"/>
    }
  return children
}
