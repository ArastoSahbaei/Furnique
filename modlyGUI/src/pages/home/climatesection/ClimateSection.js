import React from 'react'
import TreeLogo from '../../../shared/images/haha.gif';
import './ClimateSection.css'

const ClimateSection = () => {
    return (
        <div className="climateSectionWrapper">
            <img className="treeLogo" src={TreeLogo} alt=""/>
            <p className="climateTitle">Furnique 3 Miljön <br/> Vi klimatkompenserar för varje bord vi tillverkar.</p>
            <button className="climateReadMore">LÄS MER OM HUR</button>
        </div>
    )
}

export default ClimateSection
