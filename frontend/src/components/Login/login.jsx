import "./loginBig.css";
import "./login.css";
import { Link } from "react-router-dom";
import login from "../../imgs/login.png"
const Login = () => {
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
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button style={{"color":"white","fontSize":"20px"}}>Login</button>
          <p>
            Need an Account?<Link>Sign up</Link>
          </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
