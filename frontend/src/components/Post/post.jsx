import "./postBig.css";
import "./post.css";
import Sidebar from "../sidebar/sidebar";
import Cards from "../cards/cards";
import { useAuth } from "../../context/AuthContext";
import Profile from "../profile/profile";
import CreatePost from "../createPost/CreatePost";
const Post = () => {
    const auth = useAuth();
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
