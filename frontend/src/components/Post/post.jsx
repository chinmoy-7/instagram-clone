import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Post = ()=>{
    const {setIsLoggedIn}=useContext(AuthContext)
    const handleLogout=()=>{
        window.localStorage.clear();
        setIsLoggedIn(false);
    }
    return(
        <>
            {/* <button onClick={handleLogout}>Logout</button> */}
        </>
    )
}
export default Post;