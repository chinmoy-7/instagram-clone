import "./postBig.css";
import "./post.css";
import Sidebar from "../sidebar/sidebar";
import Cards from "../cards/cards";
import { useAuth } from "../../context/AuthContext";
import Profile from "../profile/profile";
import CreatePost from "../createPost/CreatePost";
import axios from 'axios'
import { useEffect } from "react";
const Post = () => {
    const auth = useAuth();
    useEffect(()=>{
      getUserDetails()
      auth.setIsLoggedIn(true);

    },[auth.nav])
    const getUserDetails=async ()=>{
      const headers = {"authorization":localStorage.getItem("token")}
      console.log(headers)
      axios.get("http://localhost:3004/api/user",{headers})
    }
  return (
    <>
      <div className="post-container">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="feed">

          <div className="cards">
                {auth.nav=="home"&&<Cards/>}
                {auth.nav=="profile"&&<Profile/>}
                {auth.nav=="createPost"&&<CreatePost/>}

          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
