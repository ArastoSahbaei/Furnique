import React, { useEffect, useState } from 'react'
import {verifyEmail} from '../../../shared/api/UserAPI'
import './EmailVerification.css'
import EmailVerificationSuccess from '../../../components/emailVerificationSuccess/EmailVerificationSuccess';
import EmailVerificationFailed from '../../../error/emailVerificationFailed/EmailVerificationFailed';
import Axios from 'axios'

const EmailVerification = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    let getTokenIdFromURL = window.location.href.split('?').reverse()[0];
    let URL = `http://localhost:8080/users/finduserbytoken?id=`;
    
    useEffect(() => {
        validateAndConfirmUser();
        return () => {
            /* */
        };
    }, []);

    async function validateAndConfirmUser() {
         verifyEmail(getTokenIdFromURL);
         const response = await Axios.get(URL+getTokenIdFromURL)
         setIsEnabled(response.data.enabled)
    }

    return (
       <div className="emailVerificationWrapper">
        {isEnabled ? <EmailVerificationSuccess /> : <EmailVerificationFailed /> }
       </div>
    )
}

export default EmailVerification
