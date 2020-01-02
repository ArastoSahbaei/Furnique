import React from 'react'
import EmailIcon from '../../../shared/images/icons/email.svg'
import FingerPrint from '../../../shared/images/icons/id-card.svg'
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
                <label> <span className="loginFormEmail"> <img className="emailIconLogin" src={EmailIcon} alt=""/> Email</span> </label>
                 <input className="emailInput" name="email" type="email" placeholder="  YourEmail@Host.com" required/> 
                 <br/>
                <label> <span className="loginFormPassword"> <img className="identifyUserIcon" src={FingerPrint} alt=""/> Password</span> </label>
                 <input className="passwordInput" type="password" placeholder=" Your Password" required></input> 
                 <br/>
            </div>
                <button className="loginButton" name="psw" type="submit"><span>Login</span></button> <br />
                <p className="forgotPassword"><a href="/www.lol.com">Forgot Password?</a></p>
            </form>

        </div>
    )
}

export default Login
