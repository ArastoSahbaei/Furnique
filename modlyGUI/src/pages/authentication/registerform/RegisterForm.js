import React, {useState} from 'react'
import Axios from 'axios'
import {ThankYouMessage} from '../../../components/thankYouMessage/ThankYouMessage'
import LoadingBar from '../../../shared/images/loadingbar.gif'
import Lock from '../../../shared/images/icons/lock.svg'
import Letter from '../../../shared/images/icons/email.svg'
import Signature from '../../../shared/images/icons/signature.svg'
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
            <img className="registerIcons" src={Signature} alt="" />  <input className="input-field1" type="text"      placeholder="Firstname"            required       onChange={handleChange('firstName')}/>
            <img className="registerIcons" src={Letter} alt="" />     <input className="input-field2" type="email"     placeholder="Email"                required       onChange={handleChange('email')}/>
            <img className="registerIcons" src={Lock} alt="" />       <input className="input-field3" type="password"  placeholder="Password" pattern=".{8,}" required title="8 characters minimum" onChange={handleChange('password')}/>   
              <div className="checkBoxContainer">
                <input type="checkbox" id="newsLetter"/> 
                <label for="newsLetter"> <span className="newsLetterTitle">Recieve the latest news, services & offers</span> </label> <br/>
                <input type="checkbox" id="terms" required/> 
                <label for="terms"> <span className="termsTitle">I agree to the terms and conditions of Furnique</span> </label>
              </div>
            {loading ? <img src={LoadingBar} alt=""/> : <button className="registerAccountButton"><span>Register Account</span></button>}
        </form>
    )
}

export default RegisterForm
