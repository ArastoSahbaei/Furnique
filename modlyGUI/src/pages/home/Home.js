import React from 'react'
import './Home.css'
import TreeLogo from '../../shared/images/haha.gif';
import MainPic from '../../shared/images/omg.jpg';
import Swiper from '../../components/swiper/Swiper'


export default function Home() {
    return (
        <div className="homeWrapper">
            <img className="mainPic" src={MainPic} alt=""/>
            <span className="mainPicTitle">Självvalda mått, <br/> med hjälp ifrån utvalda hantverkare.</span>
            <button className="createTableButton"><i class="fas fa-hammer"></i> SKAPA DITT BORD</button>

            <img className="treeLogo" src={TreeLogo} alt=""/>
            <p className="title">Vi klimatkompenserar till 100% <br/> för varje bord vi tillverkar.</p>
            <p className="subTitle">LÄS MER OM HUR</p>
            <Swiper/>
        </div>
    )
}
