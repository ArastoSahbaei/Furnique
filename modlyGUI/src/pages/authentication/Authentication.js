import React from 'react'
import './Authentication.css'
import {FloatingSquares} from '../../shared/design/floatingSquares/FloatingSquares'
import LoginForm from './loginform/LoginForm'
import RegisterForm from './registerform/RegisterForm'

const Authentication = () => {
    return (
        <div className="authenticationLoginContainer">
          <FloatingSquares />
          <LoginForm />
          <RegisterForm />
        </div>
    )
}

export default Authentication
