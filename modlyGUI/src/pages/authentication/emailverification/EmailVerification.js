import React, { useEffect, useState } from 'react'
import {verifyEmail} from '../../../shared/api/UserAPI'
import './EmailVerification.css'

const EmailVerification = () => {

    const hehe = () => {
        console.log(window.location.href.split('?').reverse()[0]
        )
    }

    useEffect(() => {
        verifyEmail(window.location.href.split('?').reverse()[0])
        return () => {
            /* cleanup */
        };
    }, [/* input */])

    return (
        <div>
            <h1>Email Verification</h1>
                <button onClick={() => hehe()}>LOOOOL</button>
                <button onClick={() => verifyEmail(window.location.href.split('?').reverse()[0])} type="submit" className="registerAccountButton">Register Account</button>
                <h1>
                  { window.location.href.split('?').reverse()[0] }
            </h1>
        </div>
    )
}

export default EmailVerification
