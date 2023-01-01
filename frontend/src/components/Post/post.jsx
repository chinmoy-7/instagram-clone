import "./postBig.css";
import "./post.css";
import Sidebar from "../sidebar/sidebar";
import Cards from "../cards/cards";
const Post = () => {
  return (
    <>
      <div className="post-container">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="feed">
          <div className="cards">
                <Cards/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
