import React, {useState} from 'react'
import './RegisterForm.css'
import Axios from 'axios'

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

    const registerNewUser = () => {
       Axios.post('http://localhost:8080/users', user)
       .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    const handleChange = key => event => {
        setUser({...user, [key]: event.target.value});
        console.log(event.target.value)
        console.log(user.firstName)
     }

    return (
        <div className="registerAccountContainer">
             <p className="registerAccountTitle">New to Modon?</p>

             <input className="input-field1" type="text"     placeholder="Firstname (Optional)"     onChange={handleChange('firstName')}/>
             <input className="input-field2" type="text"     placeholder="Surname (Optional)"       onChange={handleChange('lastName')}/>
             <input className="input-field3" type="text"     placeholder="*Email" name="email"      onChange={handleChange('email')}/>
             <input className="input-field4" type="password" placeholder="*Password" name="psw"/>
             <input className="input-field4" type="password" placeholder="*Password" name="psw"/>

             <button onClick={registerNewUser} type="submit" className="registerAccountButton">Register Account</button>
        </div>
    )
}

export default RegisterForm
