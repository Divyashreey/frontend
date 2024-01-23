import "./register.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className='register'>
      <div className="container-1">
        <span className="registerTitle"><b>Registration</b></span>
   <form className="registerForm">
   <label>Username</label>
    <input type="text" className="registerInput" placeholder="Enter your UserName..." />
    <label>Email</label>
    <input type="email" className="registerInput" placeholder="Enter your email..." />
    <label>Password</label>
    <input type="password" className="registerInput" placeholder="Enter your password..." />
   <button className="registerButton">Register</button>
   </form>
   <button className="registerLoginButton"><Link to="/login"style={{textDecoration:"none",color:"inherit"}} >Login</Link></button>
    </div>
    </div>
  )
}
