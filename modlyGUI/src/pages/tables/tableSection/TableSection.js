import React from 'react'
import './TableSection.css'
import lmao from '../../../shared/images/tableImages/1.jpg'
import lmao2 from '../../../shared/images/tableImages/2.jpg'
import lmao3 from '../../../shared/images/tableImages/3.jpg'
import lmao4 from '../../../shared/images/tableImages/4.jpg'
import lmao5 from '../../../shared/images/tableImages/5.jpg'
import lmao6 from '../../../shared/images/tableImages/6.jpg'

export default function TableSection() {
    return (
        <div className="tableSectionWrapper">
            <span className="tableSectionTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa</span>

            <div className="firstTable">
            <img className="tableImages" src={lmao}   alt="SpinnerLogo"/>
            <p>Walnut Dream</p>
            <button>hejsan</button>
            </div>

            <div className="secondTable">
            <img className="tableImages" src={lmao2}   alt="SpinnerLogo"/>
            <p>Walnut Dream</p>
            <button>hejsan</button>
            </div>

            <div className="thirdTable">
            <img className="tableImages" src={lmao3}   alt="SpinnerLogo"/>
            <p>Walnut Dream</p>
            <button>hejsan</button>
            </div>

            <div className="fourthTable">
            <img className="tableImages" src={lmao4}   alt="SpinnerLogo"/>
            <p>Walnut Dream</p>
            <button>hejsan</button>
            </div>

            <div className="fifthTable">
            <img className="tableImages" src={lmao5}   alt="SpinnerLogo"/>
            <p>Walnut Dream</p>
            <button>hejsan</button>
            </div>

            <div className="sixthTable">
            <img className="tableImages" src={lmao6}   alt="SpinnerLogo"/>
            <p>Walnut Dream</p>
            <button>hejsan</button>
            </div>



        </div>
    )
}
