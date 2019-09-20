import React from 'react'
import './TableSection.css'
import lmao from '../../../shared/images/tableImages/1.jpg'
import lmao2 from '../../../shared/images/tableImages/2.jpg'
import lmao3 from '../../../shared/images/tableImages/3.jpg'
import lmao4 from '../../../shared/images/tableImages/4.jpg'
import lmao5 from '../../../shared/images/tableImages/5.jpg'
import lmao6 from '../../../shared/images/tableImages/6.jpg'
import lmao7 from '../../../shared/images/tableImages/7.jpg'
import lmao8 from '../../../shared/images/tableImages/8.jpg'
import lmao9 from '../../../shared/images/tableImages/9.jpg'

export default function TableSection() {
    return (
        <div className="tableSectionWrapper">
            <span className="tableSectionTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa</span>

            <div className="r1c1">
            <img className="tableImages" src={lmao}   alt="SpinnerLogo"/>
            <p className="toBeChanged"> <i class="fas fa-sliders-h"></i> Coconut Dream</p>
            </div>

            <div className="r1c2">
            <img className="tableImages" src={lmao2}   alt="SpinnerLogo"/>
            <p className="toBeChanged"> <i class="fas fa-sliders-h"></i> Macedonian Peanut</p>
            </div>

            <div className="r1c3">
            <img className="tableImages" src={lmao3}   alt="SpinnerLogo"/>
            <p className="toBeChanged"> <i class="fas fa-sliders-h"></i> Polish Cream</p>
            </div>

            <div className="r2c1">
            <img className="tableImages" src={lmao4}   alt="SpinnerLogo"/>
            <p className="toBeChanged"> <i class="fas fa-sliders-h"></i> Persian Bomb</p>
            </div>

            <div className="r2c2">
            <img className="tableImages" src={lmao5}   alt="SpinnerLogo"/>
            <p className="toBeChanged"> <i class="fas fa-sliders-h"></i> Lion</p>
            </div>

            <div className="r2c3">
            <img className="tableImages" src={lmao6}   alt="SpinnerLogo"/>
            <p className="toBeChanged"> <i class="fas fa-sliders-h"></i> Zebra</p>
            </div>

            <div className="r3c1">
            <img className="tableImages" src={lmao7}   alt="SpinnerLogo"/>
            <p className="toBeChanged"> <i class="fas fa-sliders-h"></i> Bagdads Favorite</p>
            </div>

            <div className="r3c2">
            <img className="tableImages" src={lmao8}   alt="SpinnerLogo"/>
            <p className="toBeChanged"> <i class="fas fa-sliders-h"></i> African Voodoo</p>
            </div>

            <div className="r3c3">
            <img className="tableImages" src={lmao9}   alt="SpinnerLogo"/>
            <p className="toBeChanged"> <i class="fas fa-sliders-h"></i> Swedish Oak</p>
            </div>



        </div>
    )
}
