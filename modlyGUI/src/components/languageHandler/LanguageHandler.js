import React from 'react'
import './LanguageHandler.css'
import Sweden from '../../shared/images/countryFlags/se.svg'
import UK from '../../shared/images/countryFlags/gb.svg'
import Denmark from '../../shared/images/countryFlags/dk.svg'
import Norway from '../../shared/images/countryFlags/no.svg'

const LanguageHandler = () => {
    return (
        <div className="dropdown">
            <div className="arrowImageContainer">
             <i className="fas fa-caret-left"></i>
             <img className="currentFlag" src={Sweden} alt="sweden" /> 
            </div>

            <div className="dropdown-content">
             <a href="#"> <img className="flag" src={Sweden} alt="SW"/>   SE </a>
             <a href="#"> <img className="flag" src={UK} alt="UK"/>       UK </a>
             <a href="#"> <img className="flag" src={Denmark} alt="DK"/>  DK </a>
             <a href="#"> <img className="flag" src={Norway} alt="NO"/>   NO </a>
            </div>
        </div>
    )
}

export default LanguageHandler
