import React from 'react'
import './Home.css'
import MainPic from '../../shared/images/defege.jpg';
import Swiper from '../../components/swiper/Swiper'
import ClimateSection from './climatesection/ClimateSection'
import { NewsLetterSignup } from './newsLetterSignup/NewsLetterSignup';


export default function Home() {
    return (
        <div className="homeWrapper">
            <img className="mainPic" src={MainPic} alt=""/>
            <span className="mainPicTitle">Unique furniture, <span className="you">designed by you</span>.</span>
            <button className="createTableButton">GET STARTED</button>
            <div className="homeArrow">
              <i className="fas fa-chevron-down"></i>
            </div>
            <ClimateSection/>
            <NewsLetterSignup/>
           {/*  <Swiper/>  */}
        </div>
    )
}
