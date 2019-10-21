import React from 'react'
import './Authentication.css'
import LoginForm from './loginform/LoginForm'
import RegisterForm from './registerform/RegisterForm'

const Authentication = () => {
    return (
        <div className="authenticationLoginContainer">
          <LoginForm />
          <RegisterForm />
        </div>
    )
}

export default Authentication
