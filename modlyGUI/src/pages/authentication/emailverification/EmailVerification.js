import React, { useEffect, useState } from 'react'
import {verifyEmail} from '../../../shared/api/UserAPI'
import './EmailVerification.css'

const EmailVerification = () => {
    const [hasError, setErrors] = useState(false);
    const [user, setUser] = useState({});
    const getTokenIdFromURL = window.location.href.split('?').reverse()[0];
    let URL = `http://localhost:8080/users/finduserbytoken?id=`;
      
    async function checkIfUserIsEnabled() {
        const res = await fetch(URL + getTokenIdFromURL);
        res.json()
           .then(res => setUser(res))
           .catch(err => setErrors(err));
      }
    
    useEffect(() => {
        verifyEmail(getTokenIdFromURL);
        checkIfUserIsEnabled();
        return () => {
            /* */
        };
    }, []);

        useEffect(() => {
        const abortController = new AbortController();
        checkIfUserIsEnabled();
        return () => {
        if(user.enabled) {abortController.abort();}
        };
      });

    const cons = () => {
        console.log(user);
    }

    return (
        <div className="emailVerificationWrapper">
        {user.enabled ? <h1>Thank you for registrating, {user.firstName}.Account is verified!</h1> 
            : <h1>Attempting to verify account...</h1>}
        <button onClick={cons}>LOL</button>

        </div>
    )
}

export default EmailVerification
