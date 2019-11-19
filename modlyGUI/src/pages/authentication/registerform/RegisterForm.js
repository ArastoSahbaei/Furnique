import React, {useState} from 'react'
import Axios from 'axios'
import {ThankYouMessage} from '../../../components/thankYouMessage/ThankYouMessage'
import LoadingBar from '../../../shared/images/loadingbar.gif'
import './RegisterForm.css'

const RegisterForm = () => {
    const [loading, setLoading] = useState(false)
    const [registered, setRegistered] = useState(false)
    const [user, setUser] = useState({
        firstName: "",
        email: "",
        password: "",
    });

    const registerNewUser = (user) => { Axios.post('http://localhost:8080/register', user)
      .then(function (response) {
        return setRegistered(true);
       })
       .catch(function (error) {
         return alert(error) + setLoading(false);
       });
     }

    const handleChange = key => event => {
        setUser({...user, [key]: event.target.value});
     }

     const handleSubmit = event => {
        setLoading(true);
        registerNewUser(user);
        event.preventDefault();
     }

    return (
        registered ? <ThankYouMessage /> :
        <form onSubmit={handleSubmit} className="registerAccountContainer">
            <p className="registerAccountTitle"> <i className="fas fa-reply-all"/> New to <span className="registerAccountTitle2">Furnique</span> ?</p>
            <i className="fas fa-signature" />  <input className="input-field1" type="text"      placeholder="Firstname"            required       onChange={handleChange('firstName')}/>
            <i className="far fa-envelope" />   <input className="input-field3" type="email"     placeholder="Email"                required       onChange={handleChange('email')}/>
            <i className="fas fa-lock" />       <input className="input-field4" type="password"  placeholder="Password" pattern=".{8,}" required title="8 characters minimum" onChange={handleChange('password')}/>   
            {loading ? <img src={LoadingBar} alt="DEDE"/> : <button className="registerAccountButton"><span>Register Account</span></button>}
        </form>
    )
}

export default RegisterForm
