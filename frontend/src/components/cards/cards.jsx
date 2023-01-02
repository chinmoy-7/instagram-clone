import React, { useState } from "react";
import home from "../../imgs/home.png";
import like from "../../imgs/like.png";
import comment from "../../imgs/comment.png";
import share from "../../imgs/share.png";
import axios from "axios";
import { useEffect } from "react";  
// import test from '../../imgs/test.JPG'
export default function Cards() {
  const [loading,setLoading]=useState(false);
  const [allPosts,setAllPosts]=useState();
  const [available,setAvailable]=useState(true)
  useEffect(()=>{
    getAllPost();
  },[])
  const getAllPost=async ()=>{
    setLoading(true)
    const headers={"authorization":localStorage.getItem("token")}
    const posts=await axios.get("http://localhost:3004/api/post",{headers});
    console.log(posts.data.length,"test")
    if(posts.data.length==0){
      setAvailable(false)
    }else
    // console.log(posts.data)
    setAllPosts(posts.data);
    setLoading(false)

  }
  return (
    <>
    {loading&&<div>Loading ....</div>}
    {!available&&<div><h1 style={{"color":"white"}}>No data available</h1></div>}
      {!loading&&allPosts?.map((item,id)=>{
        return(
            <div className="box" key={id}>
        <div className="box-top">
          <div className="box-top-left">
            <img src={home} alt="logo" />
            <h4>{item.username}</h4>
          </div>
          <div className="box-top-right">
            <h2>...</h2>
          </div>
        </div>
        <div className="box-mid">
          <img src={item.image} alt="dp" />
        </div>
        <div className="box-bottom">
          <div className="like-comment">
            <img src={like} alt="" />
            <img src={comment} alt="" />
            <img src={share} alt="" />
          </div>
          <div className="footer-content">
            <p>24 likes</p>
            <p>
              <strong>{item.username}:</strong>{item.description}
            </p>
          </div>
        </div>
      </div> 
        )
      })}
    </>
  );
}
