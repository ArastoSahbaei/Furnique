import React from 'react'
import TreeLogo from '../../../shared/images/haha.gif';
import './ClimateSection.css'

const ClimateSection = () => {
    return (
        <div className="climateSectionWrapper">
            <img className="treeLogo" src={TreeLogo} alt=""/>
            <div className="climateTitleContainer">
            <span className="climateTitle">Furnique <i className="fas fa-heartbeat"></i> Miljön </span> 
            <p className="climateParagraph">Vi klimatkompenserar för varje bord vi tillverkar.</p>
            <button className="climateReadMore">LÄS MER OM HUR</button>
            </div>
            <span className="lineBreak" />
        </div>
    )
}

export default ClimateSection
