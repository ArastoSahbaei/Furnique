import React from 'react'
import './SubHeader.css'

export default function SubHeader() {
    return (
        <div>
            <ul className="subHeader">
                <li className="subHeaderListItem"> <i class="fa fa-arrows-h" aria-hidden="true"></i> FRI FRAKT & FRIA RETURER</li>
                <li className="subHeaderListItem"> <i class="fa fa-clock-o"  aria-hidden="true"></i> LEVERANS 3-4 VECKOR</li>
                <li className="subHeaderListItem"> <i class="fa fa-tree"     aria-hidden="true"></i> MILJÖSMART</li>
                <li className="subHeaderListItem"> <i class="fa fa-star"     aria-hidden="true"></i> NÖJDA KUNDER</li>
            </ul>
        </div>
    )
}
