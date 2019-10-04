import React from 'react'
import './Footer.css'
import SocialMedia from './socialmedia/SocialMedia'
import SubHeader from '../../components/subheader/SubHeader'

export default function Footer() {
    return (

            <div className="footerContainer">
                    <ol className="OLhelp">
                    <li className="helpLI">Information</li>
                    <li className="helpLI">Cookies</li>
                    <li className="helpLI">Köpvilkor</li>
                    <li className="helpLI">Medlemsvilkor</li>
                    <li className="helpLI">Integritetspolicy</li>
                    <li className="helpLI">Returnera en vara</li>
                    </ol>

                    <ol className="OLAbout">
                    <li className="aboutLI">MODON</li>
                    <li className="aboutLI">Om Oss</li>
                    <li className="aboutLI">Jobba hos oss</li>
                    <li className="aboutLI">Press & Media</li>
                    <li className="aboutLI">Miljöarbete</li>
                    </ol>
<SocialMedia/>
<li className="footerList"> COPYRIGHT © 2019, Modon AB</li>
<li className="footerList"> Adress</li>
        </div>
    )
}
