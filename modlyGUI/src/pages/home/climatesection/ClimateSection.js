import React from 'react'
import TreeLogo from '../../../shared/images/haha.gif';
import './ClimateSection.css'

const ClimateSection = () => {
    return (
        <div className="climateSectionWrapper">
            <p className="title">Vi klimatkompenserar till 100% <br/> för varje bord vi tillverkar.</p>
            <p className="subTitle">LÄS MER OM HUR</p>
            <img className="treeLogo" src={TreeLogo} alt=""/>
        </div>
    )
}

export default ClimateSection
