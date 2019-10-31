import React, { useEffect, useState } from 'react'
import {verifyEmail} from '../../../shared/api/UserAPI'
import './EmailVerification.css'

const EmailVerification = () => {

    useEffect(() => {
        verifyEmail(window.location.href.split('?').reverse()[0])
        return () => {
            /* cleanup */
        };
    }, [/* input */])

    return (
        <div>
            <h1>Your email has been verified.</h1> <br/>
            Todo:
            1. Get user By verificationToken
            2. check if user boolean is true
            3. display 'account verified'
        </div>
    )
}

export default EmailVerification
