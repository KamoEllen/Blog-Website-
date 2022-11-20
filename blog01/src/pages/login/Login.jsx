import './login.css'

export default function Login() {
  return (
    <div className="login">
        <span className="loginTi">Login</span>
      <form className='loginForm'>
        <label>Email</label>
        <input type="text" placeholder="Enter youremail.."/>
        <label>Password</label>
        <input type="password" placeholder="Enter your password.."/>
     <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  )
}
