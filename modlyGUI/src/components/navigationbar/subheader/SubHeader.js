import React from 'react'
import './SubHeader.css'

export default function SubHeader() {
    return (
        <div>
            <ul className="subHeader">
                <li className="fraktFritt"> <i class="fas fa-truck"></i>         
                <span className="headerSubTitle">Fri frakt</span> 
                <p className="fraktFrittSubTitle">2-3 Veckors leveranstid</p>
                </li>

                <li className="trygghetsGaranti"> <i class="far fa-smile-beam"></i>    
                <span className="headerSubTitle">Trygghetsgaranti</span> 
                <p className="fraktFrittSubTitle">Alltid 100 dagars returrätt</p>
                </li>

                <li className="miljoSmart"> <i class="fab fa-pagelines"></i>     
                <span className="headerSubTitle">Miljösmart</span> 
                <p className="fraktFrittSubTitle">Vartenda köp bidrar till miljön. Läs mer om hur här</p>
                </li>

                <li className="betalningsMetoder"> <i class="fab fa-bitcoin"></i>       
                <span className="headerSubTitle">Säkra betalningsmetoder</span> 
                <p className="fraktFrittSubTitle">Säkert, tryggt & smidigt oavsett kort eller faktura</p>
                </li>
            </ul>
        </div>
    )
}
