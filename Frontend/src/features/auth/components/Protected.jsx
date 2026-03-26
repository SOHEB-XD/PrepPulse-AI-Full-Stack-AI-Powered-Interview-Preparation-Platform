import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'
import LoadingPage from "./LoadingPage";

const Protected = ({children}) => {
    const { loading,user } = useAuth()


    if(loading){
        return <LoadingPage />
    }

    if(!user){
        return <Navigate to={'/login'} />
    }
    
    return children
}

export default Protected