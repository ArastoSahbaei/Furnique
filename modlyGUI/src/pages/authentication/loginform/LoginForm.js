import React from 'react'
import './LoginForm.css'

const Login = () => {
    return (
        <div className="loginCard">
            <span className="wellcomeBackTitle">Hey, we're glad to see you again!</span>
            <form method="post">
             <div className="inputFields">
                <label><i className="far fa-envelope fa-2x"/></label>
                 <input className="emailInput" name="email" type="text" placeholder="Email" required/> <br/>
                <label><i className="fas fa-lock fa-2x"/></label>
                 <input className="passwordInput" type="password" placeholder="Password" required></input> <br/>
            </div>
                <button className="loginButton" name="psw" type="submit">Login</button> <br />
                <p className="forgotPassword"><a href="#">Forgot Password?</a></p>
            </form>

        </div>
    )
}

export default Login
