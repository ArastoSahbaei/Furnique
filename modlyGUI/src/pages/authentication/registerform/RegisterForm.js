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

     const handleSubmit = event => {
        registerNewUser(user);
        event.preventDefault();
     }

    return (
    <form onSubmit={handleSubmit} className="registerAccountContainer">
        <p className="registerAccountTitle"><i className="fas fa-reply-all"/>New to <span className="registerAccountTitle2">Furnique</span> ?</p>
            <input className="input-field1" type="text"      placeholder="Firstname (Optional)" required       onChange={handleChange('firstName')}/>
            <input className="input-field3" type="email"     placeholder="Email"                required       onChange={handleChange('email')}/>
            <input className="input-field4" type="password"  placeholder="Password"             required       onChange={handleChange('password')}/>   
        <button onClick={() => handleSubmit()} type="submit" className="registerAccountButton"> Register Account </button>
    </form>
    )
}

export default RegisterForm
