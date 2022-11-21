import { Link } from 'react-router-dom';
]
import './login.css'

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className='loginForm'>
        <label>Email</label>
        <input type="text" placeholder="Enter youremail.."/>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password.."/>
     <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    <Link className="link" to="/register">Register</Link>

    </div>
  );
}
