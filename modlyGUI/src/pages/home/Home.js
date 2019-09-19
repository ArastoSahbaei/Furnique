import React from 'react'
import './Home.css'
import TreeLogo from '../../shared/images/denne.jpg';
import DesignSection from './designsection/DesignSection'
import RecommendationSection from './recommendationsection/RecommendationSection'
import NewsLetterSection from './newslettersection/NewsLetterSection'
import Swiper from '../../components/swiper/Swiper'


export default function Home() {
    return (
        <div className="homeWrapper">
            <img className="treeLogo" src={TreeLogo} alt=""/>
            <p className="title">Vi klimatkompenserar till 100% <br/> för varje bord vi tillverkar.</p>
            <p className="subTitle">LÄS MER OM HUR</p>
            <DesignSection/>
            <RecommendationSection/>
            <NewsLetterSection/>
            <Swiper/>
        </div>
    )
}
