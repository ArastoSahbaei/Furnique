import React from 'react'
import './DesignSection.css'
import Arrow from '../../../shared/images/arrow.png';


export default function DesignSection() {
    return (
               <div className="produktWrapper">
                            <img className="arrowLogo" src={Arrow}/>
                                <p className="produktTitle">Designa din möbel</p>
                                <ul className="produktUL">
                                    <li className="produktLI1">MATBORD</li>
                                    <li className="produktLI2">SOFFBORD</li>
                                    <li className="produktLI3">SIDOBORD</li>
                                </ul>
                            </div>
    )
}
