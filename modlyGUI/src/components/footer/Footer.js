import React from 'react'
import './Footer.css'
import SocialMedia from './socialmedia/SocialMedia'
import SubHeader from '../../components/subheader/SubHeader'

export default function Footer() {
    return (

            <div className="footerContainer">
                    <ol className="OLhelp">
                    <li className="OLhelpTitle">INFORMATION</li>
                    <li className="helpLI"><span>Cookies</span></li>
                    <li className="helpLI"><span>Köpvilkor</span></li>
                    <li className="helpLI"><span>Medlemsvilkor</span></li>
                    <li className="helpLI"><span>Integritetspolicy</span></li>
                    <li className="helpLI"><span>Returnera en vara</span></li>
                    </ol>

                    <ol className="OLAbout">
                    <li className="OLAboutTitle">MODON</li>
                    <li className="aboutLI">Vårat arbete</li>
                    <li className="aboutLI">Miljöarbete</li>
                    <li className="aboutLI">Press & Media</li>
                    <li className="aboutLI">Jobb</li>
                    <li className="aboutLI">App</li>
                    </ol>

                    <ol className="OLContact">
                    <li className="OLContactTitle">KONTAKT</li>
                    <li className="ContactLI">Kontaktform</li>
                    <li className="ContactLI">Direktlinje +46 722 92 1983</li>
                    <li className="ContactLI">Veckodagar: 10:00 - 23:00</li>
                    <li className="ContactLI">Helgdagar: 12:00 - 16:00</li>
                    </ol>

                    <SocialMedia/>
                    <ol className="OLCompany">
                    <input></input>
                    <li className="footerList"> Mom's incubator, Gothenburg, Sweden.</li>
                    <li className="footerList"> © Copyright 2019, Modon AB. All Rights Reserved.</li>
                    </ol>
        </div>
    )
}
