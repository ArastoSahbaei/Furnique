import React from 'react'
import './Footer.css'
import SocialMedia from './socialmedia/SocialMedia'

export default function Footer() {
    return (
        <div className="footerWrapper">
               <ul className="footerList">
                    <li className="footerList"> ©2019 CompanyName AB. All rights reserved. </li>
                    <SocialMedia/>
                </ul>
        </div>
    )
}
