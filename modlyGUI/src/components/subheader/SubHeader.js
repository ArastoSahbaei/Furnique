import React from 'react'
import Delivery from '../../shared/images/icons/delivery.svg'
import Tree from '../../shared/images/icons/tree.svg'
import HappyCustomer from '../../shared/images/icons/happiness.svg'
import Bitcoin from '../../shared/images/icons/bitcoin.svg'
import './SubHeader.css'

export default function SubHeader() {
    return (
        <div>
            <ul className="subHeader">
                <li className="fraktFritt"> <img className="truckIcon" src={Delivery} alt="" />     
                <span className="headerSubTitle">Fri frakt</span> 
                <p className="fraktFrittSubTitle">2-3 Veckors leveranstid</p>
                </li>

                <li className="trygghetsGaranti"> <img className="happyIcon" src={HappyCustomer} alt="" />    
                <span className="headerSubTitle">Trygghetsgaranti</span> 
                <p className="fraktFrittSubTitle">Skulle du bli missnöjd? Alltid 30 dagars returrätt!</p>
                </li>

                <li className="miljoSmart"> <img className="enviromentIcon" src={Tree} alt="" />   
                <span className="headerSubTitle">Miljösmart</span> 
                <p className="fraktFrittSubTitle">Vartenda köp bidrar till miljön. Läs mer om hur <span className="miljoInfo">här</span></p>
                </li>

                <li className="betalningsMetoder"> <img className="bitcoinIcon" src={Bitcoin} alt="" />     
                <span className="headerSubTitle">Säkra betalningsmetoder</span> 
                <p className="fraktFrittSubTitle">Säkert, tryggt & smidigt oavsett kort eller faktura</p>
                </li>
            </ul>
        </div>
    )
}
