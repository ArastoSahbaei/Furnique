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
                    <li className="aboutLI"><span>Om Oss</span></li>
                    <li className="aboutLI"><span>Miljöarbete</span></li>
                    <li className="aboutLI"><span>Press & Media</span></li>
                    <li className="aboutLI"><span>Jobb</span></li>
                    <li className="aboutLI"><span>App</span></li>
                    </ol>

                    <ol className="OLContact">
                    <li className="OLContactTitle">KONTAKT</li>
                    <li className="ContactLI"><span>Kontaktform</span></li>
                    <li className="ContactLI">Direktlinje +46 722 92 1983</li>
                    <li className="ContactLIminor">Veckodagar: 10:00 - 23:00</li>
                    <li className="ContactLIminor">Helgdagar: 12:00 - 16:00</li>
                    </ol>

                    <ol className="OLConnect">
                    <li>Connect with us!</li> {/* 'FÖR OSS SAMMAN', 'WORD!' ? */}
                    <li><SocialMedia/></li>
                    </ol>

                    <ol className="OLCompany">
                    <li className="footerList"><i class="fas fa-map-marker-alt"></i> Mom's incubatorgatan 47B, Göteborg, Sverige.</li> <br/>
                    <li className="footerList"> © Upphovsrätt 2019, Modon AB. Alla rättigheter förbehålls.</li>
                    </ol>
        </div>
    )
}
