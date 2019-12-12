import React, { useContext } from 'react'
import './ToggleCartButton.css'
import { CartContext } from '../addToCartButton/CartContext'
import { EmptyCartIcon } from './EmptyCartIcon'
import { CartIconWithItems } from './CartIconWithItems'

const ToggleCart = () => {
    const [cart] = useContext(CartContext)

    return (
        <div>
           {(cart.length === 0 ? <EmptyCartIcon /> : <CartIconWithItems />)}
        </div>
    )
}

export default ToggleCart
