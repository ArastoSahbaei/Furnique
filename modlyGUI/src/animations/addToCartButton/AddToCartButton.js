import React, {useContext} from 'react'
import {CartMenuContext} from '../../components/cart/CartMenuProvider'

export default function AddToCartButton() {

    const menuHandler = useContext(CartMenuContext)

    return (
        <div>
            <button onClick={menuHandler.toggleMenu}>Add to cart</button>
        </div>
    )
}
