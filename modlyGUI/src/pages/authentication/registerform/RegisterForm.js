import React, {useState} from 'react'
import {registerNewUser} from '../../../shared/api/UserAPI'
import './RegisterForm.css'

const RegisterForm = () => {

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        address:"",
        city:"",
        postalCode:"1337090909",
        country:"",
        phone:"",
        deleted:false
    });

    const handleChange = key => event => {
        setUser({...user, [key]: event.target.value});
     }

    return (
        <div className="registerAccountContainer">
             <p className="registerAccountTitle">New to Modon?</p>
             <input className="input-field1" type="text"     placeholder="Firstname (Optional)"     onChange={handleChange('firstName')}/>
             <input className="input-field2" type="text"     placeholder="Surname (Optional)"       onChange={handleChange('lastName')}/>
             <input className="input-field3" type="text"     placeholder="Email (Required)" name="email"      onChange={handleChange('email')}/>
             <input className="input-field4" type="password" placeholder="Password (Required)" name="psw"/>
             <input className="input-field4" type="password" placeholder="Password (Required)" name="psw"/>
             <button onClick={() => registerNewUser(user)} type="submit" className="registerAccountButton">Register Account</button>
        </div>
    )
}

export default RegisterForm
