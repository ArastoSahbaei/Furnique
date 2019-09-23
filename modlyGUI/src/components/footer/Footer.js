import React from 'react'
import './Footer.css'
import SocialMedia from './socialmedia/SocialMedia'
import SubHeader from '../../components/navigationbar/subheader/SubHeader'

export default function Footer() {
    return (
        <div className="footerWrapper">
            <SubHeader/>
               <ul className="footerList">
                    <li className="footerList"> COPYRIGHT © 2019, NyttNamn AB</li>
                    <SocialMedia/>
                </ul>
        </div>
    )
}
