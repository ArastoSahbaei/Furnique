import React from 'react'
import './EmailVerificationSuccess.css'

const EmailVerificationSuccess = () => {
    return (
    <div className="sucessWrapper">
         <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <ul className="emailVerificationSuccessWrapper">
            <li className="confirmedVerificationTitle"> Congratulations, <br/>Your account has been verified. </li>
            <li> <button className="browseProducts"> <span>Browse products </span> </button> <br/> </li>
            <li> <button className="createYourOwn">  <span>Design your own </span> </button> <br/> </li>
            <li> <button className="getInspired">    <span>Get inspiration </span> </button> <br/> </li>
        </ul>
    </div>
    )
}

export default EmailVerificationSuccess
