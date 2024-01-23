import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className='login'>
      <div className="container-1">
        <span className="loginTitle"><b>Login</b></span>
   <form className="loginForm">
    <label>Email</label>
    <input type="email" className="loginInput" placeholder="Enter your email..." />
    <label>Password</label>
    <input type="password" className="loginInput" placeholder="Enter your password..." />
   <button className="loginButton">Login</button>
   </form>
   <button className="loginRegisterButton"><Link to="/register"style={{textDecoration:"none",color:"inherit"}} >Register</Link></button>
    </div>
    </div>
  )
}
