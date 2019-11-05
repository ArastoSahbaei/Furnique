import React from 'react'
import './Home.css'
import MainPic from '../../shared/images/defege.jpg';
import Swiper from '../../components/swiper/Swiper'
import ClimateSection from './climatesection/ClimateSection'


export default function Home() {
    return (
        <div className="homeWrapper">
            <img className="mainPic" src={MainPic} alt=""/>
            <p className="mainPicTitle">Unique furniture for your home, designed by you.</p>
            <button className="createTableButton">Try now..</button>
            <ClimateSection/>
            <Swiper/> 
        </div>
    )
}
