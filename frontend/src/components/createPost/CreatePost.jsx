import React, { useState } from 'react'
import Filebase64 from 'react-file-base64'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'
import './createPostBig.css'
import './createPost.css'
export default function CreatePost() {
  const auth=useAuth();
  const [loading,setLoading]=useState(false)
  const [img,setImg]=useState()
  const [description,setDescription]=useState();
  const handleImage=async (e)=>{
    e.preventDefault()
    setLoading(true)
    const headers = {"authorization":localStorage.getItem("token")}
    const uploaded=await axios.post("http://localhost:3004/upload",{img,description},{headers})
    setLoading(false);
    if(uploaded.data.status=="success"){
      auth.setNav("home");
    }
  }
  return (
    <div className="createPost-container">
        {/* <label htmlFor="">Upload Here</label> */}
        <form action="/upload" method="POST" encType='multipart/form-data'>
          <Filebase64 
          multiple={false} onDone={(image)=>{
            setImg({...img,image:image.base64})
          }}
          />
          <textarea name="" id="" cols="30" rows="5" placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}}>

          </textarea>
          <button onClick={handleImage}>Upload</button>
          {loading&&<div><h2>uploading</h2></div>}
        </form> 
    </div>
  )
}
