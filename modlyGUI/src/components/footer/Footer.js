import React from 'react'
import './Footer.css'
import SocialMedia from './socialmedia/SocialMedia'
import { NavLink } from 'react-router-dom'
import SubHeader from '../../components/subheader/SubHeader'

export default function Footer() {
    return (

            <div className="footerContainer">
                    <ol className="OLhelp">
                    <li className="OLhelpTitle">INFORMATION</li>
                    <NavLink to="/checkout"> 
                    <li className="helpLI"><span>Cookies</span></li>
                    </NavLink>
                    <NavLink to="/checkout"> 
                    <li className="helpLI"><span>Köpvilkor</span></li>
                    </NavLink>
                    <NavLink to="/checkout"> 
                    <li className="helpLI"><span>Medlemsvilkor</span></li>
                    </NavLink>
                    <NavLink to="/checkout"> 
                    <li className="helpLI"><span>Integritetspolicy</span></li>
                    </NavLink>
                    <NavLink to="/checkout"> 
                    <li className="helpLI"><span>Returnera en vara</span></li>
                    </NavLink>
                    </ol>

                    <ol className="OLAbout">
                    <li className="OLAboutTitle">MODON</li>
                    <NavLink to="/checkout"> 
                    <li className="aboutLI"><span>Om Oss</span></li>
                    </NavLink>
                    <NavLink to="/checkout"> 
                    <li className="aboutLI"><span>Miljöarbete</span></li>
                    </NavLink>
                    <NavLink to="/checkout"> 
                    <li className="aboutLI"><span>Press & Media</span></li>
                    </NavLink>
                    <NavLink to="/checkout"> 
                    <li className="aboutLI"><span>Jobb</span></li>
                    </NavLink>
                    <NavLink to="/checkout"> 
                    <li className="aboutLI"><span>App</span></li>
                    </NavLink>
                    </ol>

                    <ol className="OLContact">
                    <li className="OLContactTitle">KONTAKT</li>
                    <NavLink to="/checkout"> 
                    <li className="ContactLI"><span>Kontaktform</span></li>
                    </NavLink>
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
