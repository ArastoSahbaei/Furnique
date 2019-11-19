import React, {useState} from 'react'
import {registerNewUser} from '../../../shared/api/UserAPI'
import './RegisterForm.css'

const RegisterForm = () => {

    const [user, setUser] = useState({
        firstName: "",
        email: "",
        password: "",
    });

    const handleChange = key => event => {
        setUser({...user, [key]: event.target.value});
     }

    return (
        <div className="registerAccountContainer">
             <p className="registerAccountTitle"><i className="fas fa-reply-all"/>New to <span className="registerAccountTitle2">Furnique</span> ?</p>
             <input className="input-field1" type="text"     placeholder="Firstname (Optional)"     onChange={handleChange('firstName')}/>
             <input className="input-field3" type="text"     placeholder="Email" name="email"       onChange={handleChange('email')}/>
             <input className="input-field4" type="password" placeholder="Password" name="psw"      onChange={handleChange('password')}/>   
             <button onClick={() => registerNewUser(user)} type="submit" className="registerAccountButton">Register Account</button>
        </div>
    )
}

export default RegisterForm
