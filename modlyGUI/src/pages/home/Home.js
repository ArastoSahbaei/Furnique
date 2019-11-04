import React from 'react'
import './Home.css'
import MainPic from '../../shared/images/sharp.jpg';
import Swiper from '../../components/swiper/Swiper'
import ClimateSection from './climatesection/ClimateSection'


export default function Home() {
    return (
        <div className="homeWrapper">
            <img className="mainPic" src={MainPic} alt=""/>
            <span className="mainPicTitle">Självvalda mått, <br/> med hjälp ifrån utvalda hantverkare.</span>
            <button className="createTableButton"><i class="fas fa-hammer"></i> SKAPA DITT BORD</button>
            <ClimateSection/>
            <Swiper/> 
        </div>
    )
}
