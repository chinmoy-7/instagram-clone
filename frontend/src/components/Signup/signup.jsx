import { Link } from 'react-router-dom'
import "./signupBig.css"
import './signup.css'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
const Signup = ()=>{
    const navigate = useNavigate();
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState({email:"",fullname:"",username:"",password:""})
    const handleSignup=async (e)=>{
        e.preventDefault()
        setLoading(true)
        const user = await axios.post("http://localhost:3004/signup",data);
        setLoading(false);
        // console.log(user.data);


        if(data.email==" "||!data.email.includes("@")){
            alert("Enter a valid email")
            return
        }else if(data.fullname==""){
            alert("Full name field empty");
            return
        }else if(data.username==""){
            alert("Username Field Empty");
            return
        }else if(data.password.length<8||data.password.length>16){
            alert("Password length should be between 8 and 16 characters");
            return;
        }

        if(user.data.status=="failed"){
            alert("User Already Exists");
            return;
        }
        navigate("/");
    }
    return(
        <>
        <div className="signup-container">
            <div className="signup-top">
                <h1>Instagram</h1>
                <p>Sign up to see photos and videos<br>
                </br> from your friends.</p>
            </div>
            <div className="signup-bottom">
                <form action="">
                    <input type="email" placeholder='Email' required onChange={(e)=>{setData({...data,email:e.target.value})}}/>
                    <input type="text" placeholder='Full Name' required onChange={(e)=>{setData({...data,fullname:e.target.value})}}/>
                    <input type="text" placeholder='Username' required onChange={(e)=>{setData({...data,username:e.target.value})}}/>
                    <input type="password" placeholder='Password' required onChange={(e)=>{setData({...data,password:e.target.value})}}/>
                    <button id="signup" type='submit' onClick={handleSignup}>Signup</button>
                    {loading&&<div>Registering ......</div>}
                </form>
            </div>
        </div>
        </>
    )
}
export default Signup