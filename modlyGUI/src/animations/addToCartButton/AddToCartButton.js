import React, {useContext} from 'react'
import {CartMenuContext} from '../../components/cart/CartMenuProvider'

export default function AddToCartButton() {

    const menuHandler = useContext(CartMenuContext)

    return (
        <div>
            {/* TODO:
             1. Add the object to cart
             2. Display the object in the cart menu 
             */}
            <button onClick={menuHandler.toggleMenu}>Add to cart</button>
        </div>
    )
}
