import React from 'react'
import './RegisterForm.css'

const RegisterForm = () => {

    return (
        <div className="registerAccountContainer">
             <p className="registerAccountTitle">New to Modon?</p>
             <input className="input-field1" type="text" placeholder="Firstname (Optional)"/>
             <input className="input-field2" type="text" placeholder="Surname (Optional)"/>
             <input className="input-field3" type="text" placeholder="*Email" name="email"/>
             <input className="input-field4" type="password" placeholder="*Password" name="psw"/>
             <input className="input-field4" type="password" placeholder="*Password" name="psw"/>
             <button type="submit" className="registerAccountButton">Register Account</button>
        </div>
    )
}

export default RegisterForm
