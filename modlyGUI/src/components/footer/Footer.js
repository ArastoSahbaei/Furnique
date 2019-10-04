import React from 'react'
import './Footer.css'
import SocialMedia from './socialmedia/SocialMedia'
import SubHeader from '../../components/subheader/SubHeader'

export default function Footer() {
    return (

            <div className="footerContainer">
                    <ol className="OLhelp">
                    <li className="OLhelpTitle">INFORMATION</li>
                    <li className="helpLI">Cookies</li>
                    <li className="helpLI">Köpvilkor</li>
                    <li className="helpLI">Medlemsvilkor</li>
                    <li className="helpLI">Integritetspolicy</li>
                    <li className="helpLI">Returnera en vara</li>
                    </ol>

                    <ol className="OLAbout">
                    <li className="OLAboutTitle">MODON</li>
                    <li className="aboutLI">Vårat arbete</li>
                    <li className="aboutLI">Miljöarbete</li>
                    <li className="aboutLI">Press & Media</li>
                    <li className="aboutLI">Jobb</li>
                    <li className="aboutLI">App</li>
                    </ol>

                    <ol className="OLAbout">
                    <li className="OLCompanyTitle">KONTAKT</li>
                    <li className="aboutLI">Direktlinje +46 722 92 1983</li>
                    <li className="aboutLI">Veckodagar: 10:00 - 23:00</li>
                    <li className="aboutLI">Helgdagar: 12:00 - 16:00</li>
                    <li className="aboutLI">Kontaktform</li>
                    </ol>

                    <SocialMedia/>
                    <ol className="OLCompany">
                    <input></input>
                    <li className="footerList"> Mom's incubator, Gothenburg, Sweden.</li>
                    <li className="footerList"> COPYRIGHT © 2019, Modon AB</li>
                    </ol>
        </div>
    )
}
