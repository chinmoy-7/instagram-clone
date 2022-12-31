import { Link } from 'react-router-dom'
import "./signupBig.css"
import './signup.css'
const Signup = ()=>{
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
                    <input type="email" placeholder='Email' required/>
                    <input type="text" placeholder='Full Name' required/>
                    <input type="text" placeholder='Username' required/>
                    <input type="password" placeholder='Password' required/>
                    <button id="signup" type='submit'>Signup</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Signup