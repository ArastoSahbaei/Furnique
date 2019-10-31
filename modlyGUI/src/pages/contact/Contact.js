import React from 'react'
import './Contact.css'

export default function Contact() {

    const hehe = () => {
        console.log(window.location.href.split('?').reverse()[0]
        )
    }

    return (
        <div>
              <h1>JungleBoi</h1>
                <button onClick={() => hehe()}>LOOOOL</button>
                <h1>
                  { window.location.href.split('?').reverse()[0]}

                </h1>
        </div>
    )
}
