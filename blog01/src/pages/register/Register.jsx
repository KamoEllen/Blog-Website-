
import { Link } from 'react-router-dom';

import './register.css'

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className='registerForm'>
      <label>Username</label>
        <input type="text" placeholder="Enter your username.."/>
        <label>Email</label>
        <input type="text" placeholder="Enter your email.."/>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password.."/>
        <button className="loginRegisterButton">Register</button>
      </form>
      <button className="loginButton">Login</button>
     <Link className="link" to="/login">LOGIN</Link>

       </div>
  );
}
