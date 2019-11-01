import React, { useEffect, useState } from 'react'
import {verifyEmail} from '../../../shared/api/UserAPI'
import './EmailVerification.css'

const EmailVerification = () => {
    const [hasError, setErrors] = useState(false);
    const [user, setUser] = useState({});
    const getTokenIdFromURL = window.location.href.split('?').reverse()[0];
    
      
    const checkIfUserIsEnabled = (user) => {
        if (user) setUser({ enabled: true, ...user })
      }

    async function getUser() {
        let URL = `http://localhost:8080/users/finduserbytoken?id=`;
        const res = await fetch(URL + getTokenIdFromURL);
        const user = res.json()
        checkIfUserIsEnabled(user)
        res.json()
           .then(res => setUser(res))
           .catch(err => setErrors(err));
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
        <h1>{` Result is ${user.enabled}`}</h1>
        <br/>
        <div>Current User State:</div>
        <pre>{JSON.stringify(user)}</pre>
     </div>
    )
}

export default EmailVerification
