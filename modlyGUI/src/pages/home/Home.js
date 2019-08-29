import React from 'react'
import './Home.css'
import TreeLogo from '../../shared/images/denne.jpg';
import Arrow from '../../shared/images/arrow.png';
import DesignSection from './designsection/DesignSection'


export default function Home() {
    return (
        <div className="homeWrapper">
            <img className="treeLogo" src={TreeLogo}/>
            <p className="title">Vi klimatkompenserar till 100% <br/> för varje möbel vi tillverkar.</p>
            <p className="subTitle">LÄS MER OM HUR</p>
            <DesignSection/>
        </div>
    )
}
