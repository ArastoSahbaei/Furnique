import React, { useEffect, useState } from 'react'
import {verifyEmail} from '../../../shared/api/UserAPI'
import './EmailVerification.css'
import EmailVerificationSuccess from '../../../error/emailVerification/EmailVerificationSuccess';
import EmailVerificationFailed from '../../../error/emailVerification/EmailVerificationFailed';

const EmailVerification = () => {
    const [user, setUser] = useState({});
    let getTokenIdFromURL = window.location.href.split('?').reverse()[0];
    let URL = `http://localhost:8080/users/finduserbytoken?id=`;
      
    const checkIfUserIsEnabled = (user) => {
        if (user) setUser({ enabled: true, ...user })
    }

    async function getUser() {
        const res = await fetch(URL + getTokenIdFromURL);
        checkIfUserIsEnabled(res.json())
    }
    
    useEffect(() => {
        verifyEmail(getTokenIdFromURL);
        getUser();
        return () => {
            /* */
        };
    }, []);

    return (
       <div className="emailVerificationWrapper">
        {user.enabled ? <EmailVerificationSuccess /> : <EmailVerificationFailed /> }
       </div>
    )
}

export default EmailVerification
