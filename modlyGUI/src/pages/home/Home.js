import React from 'react'
import './Home.css'
import TreeLogo from '../../shared/images/denne.jpg';


export default function Home() {
    return (
        <div className="homeWrapper">
            <p className="title">Vi klimatkompenserar till 100% <br/>
            för varje möbel vi tillverkar.</p>
            <img className="treeLogo" src={TreeLogo}/>
            <p className="subTitle">LÄS MER OM HUR</p>
        </div>
    )
}
