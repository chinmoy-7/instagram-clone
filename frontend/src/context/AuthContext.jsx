import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useContext } from "react";
const AuthContext  = createContext();

export const AuthContextprovider=({children})=>{
    const navigate=useNavigate();
    const [loginData,setLoginData]=useState({email:"",password:""})
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const handleLogin=async (e)=>{
        e.preventDefault()
        setIsLoggedIn(true)
        const user = await axios.post("http://localhost:3004/login",loginData)
        // console.log(user.data.status)
        if(user.data.status!="success"){
            setIsLoggedIn(false)
            alert("Invalid Credential")
            return;
        }
        window.localStorage.setItem("token",user.data.token)
        navigate("/post",{replace:true})
    }
    return(
        <AuthContext.Provider value={{setLoginData,handleLogin,loginData,isLoggedIn,setIsLoggedIn   }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}

export default AuthContext;