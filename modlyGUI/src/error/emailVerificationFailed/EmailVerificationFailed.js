import React from 'react'
import './EmailVerificationFailed.css'

const EmailVerificationFailed = () => {
    return (
        <div className="emailVerificationFailedWrapper">
            <span className="verificationFailedTitle">Unfortunatley, <br/> there has been an issue.</span> <br/>
            <span className="verificationFailedSubTitle">You did not verify your user in time.</span> <br />
            <button className="sendNewVerificationMailButton">Send me a new verification email</button>
        </div>
    )
}

export default EmailVerificationFailed
