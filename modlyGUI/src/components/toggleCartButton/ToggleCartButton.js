import React, {useContext} from 'react'
import {CartMenuContext} from '../cart/CartMenuProvider'
import './ToggleCartButton.css'

const ToggleCart = () => {
    const menuHandler = useContext(CartMenuContext);

    return (
        <div>
            <span onClick={() => menuHandler.toggleMenu()}>
                <i className="fa fa-shopping-cart" aria-hidden="true"/>
            </span>
        </div>
    )
    
}

export default ToggleCart
