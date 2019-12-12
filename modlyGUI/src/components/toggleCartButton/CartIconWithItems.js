import React, { useContext } from 'react'
import { CartMenuContext } from '../cart/CartMenuProvider'
import { CartContext } from '../addToCartButton/CartContext'
import ShoppingBag from '../../shared/images/icons/cartWithItems.svg'

export const CartIconWithItems = () => {

    const menuHandler = useContext(CartMenuContext)
    const [cart] = useContext(CartContext)

    return (
        <div className="cartIconWithItems">
         <span className="itemCounter">{cart.length}</span>
          <span onClick={() => menuHandler.toggleMenu()}> 
            <img className="shoppingCartIcon" src={ShoppingBag} alt="" />
         </span>
        </div>
    )
}
