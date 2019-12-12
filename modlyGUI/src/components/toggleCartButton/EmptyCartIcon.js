import React, { useContext } from 'react'
import { CartMenuContext } from '../cart/CartMenuProvider'
import ShoppingBag from '../../shared/images/icons/shopping-bag.svg'

export const EmptyCartIcon = () => {

    const menuHandler = useContext(CartMenuContext)

    return (
            <div className="emptyCartIconContainer">
             <span onClick={() => menuHandler.toggleMenu()}> 
                <img className="shoppingCartIcon" src={ShoppingBag} alt="" />
             </span>
            </div>
    )
}
