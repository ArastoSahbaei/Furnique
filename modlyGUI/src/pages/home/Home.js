import React from 'react'
import './Home.css'
import TreeLogo from '../../shared/images/denne.jpg';
import Arrow from '../../shared/images/arrow.png';


export default function Home() {
    return (
        <div className="homeWrapper">
            <img className="treeLogo" src={TreeLogo}/>
            <p className="title">Vi klimatkompenserar till 100% <br/> för varje möbel vi tillverkar.</p>
            <p className="subTitle">LÄS MER OM HUR</p>

                            <div className="produktWrapper">
                            <img className="arrowLogo" src={Arrow}/>
                                <p className="produktTitle">Designa din möbel</p>
                                <ul className="produktUL">
                                   {/*  <li className="produktTitle">Våra Produkter</li> */}
                                    <li className="produktLI">MATBORD</li>
                                    <li className="produktLI">SOFFBORD</li>
                                    <li className="produktLI">SIDOBORD</li>
                                </ul>
                            </div>
        </div>
    )
}
