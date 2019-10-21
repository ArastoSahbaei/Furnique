import React from 'react'
import './LoginForm.css'

const Login = () => {
    return (
        <div className="loginCard">
            <span className="wellcomeBackTitle">Hey! We're glad to see you again.</span>
            <form action="action_page.php" method="post">

                <input className="emailInput" name="email" type="text" placeholder="Email" required/> <br/>
                <input className="passwordInput" type="password" placeholder="Password" required></input> <br/>

                <button className="loginButton" name="psw" type="submit">Login</button> <br />
                <span class="psw"><a href="#">Forgot Password?</a></span>
            </form>
        </div>
    )
}

export default Login
