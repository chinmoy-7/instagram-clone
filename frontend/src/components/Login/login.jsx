import "./loginBig.css";
import "./login.css";
import { Link } from "react-router-dom";
import login from "../../imgs/login.png"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useEffect } from "react";
const Login = () => {
  const {handleLogin,setLoginData,loginData,isLoggedIn}=useContext(AuthContext)
  return (
    <>
      <div className="login-container">
        <div className="login-left">
                <img src={login} alt="as" />
        </div>
        <div className="login-right">
          <div className="login-heading">
            <h1>Instagram</h1>
          </div>
          <form className="login-form">
          <input type="text" placeholder="Email" onChange={(e)=>{setLoginData({...loginData,email:e.target.value})}}/>
          <input type="password" placeholder="Password" onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}/>
          <button style={{"color":"white","fontSize":"20px"}} type="submit" onClick={handleLogin}>Login</button>
          {isLoggedIn&&<div>Logging in ....</div>}
          <p>
            Need an Account?<Link to="/signup">Sign up</Link>
          </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
