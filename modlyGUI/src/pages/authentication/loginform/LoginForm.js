import React from 'react'
import './LoginForm.css'

const Login = () => {
    return (
        <div className="loginCard">
            <div className="titleDiv">
            <span className="wellcomeBackTitle">Hey, we're glad to see you again!</span>
            </div>
            <hr/>
            <form method="post">
             <div className="inputFields">
                <label> <span className="loginFormEmail"> <i class="fas fa-paper-plane"/> Email</span> </label>
                 <input className="emailInput" name="email" type="email" placeholder=" Your Email" required/> 
                 <br/>
                <label> <span className="loginFormPassword"><i className="fas fa-key"/> Password</span> </label>
                 <input className="passwordInput" type="password" placeholder=" Your Password" required></input> 
                 <br/>
            </div>
                <button className="loginButton" name="psw" type="submit"><span>Login</span></button> <br />
                <p className="forgotPassword"><a href="#">Forgot Password?</a></p>
            </form>

        </div>
    )
}

export default Login
