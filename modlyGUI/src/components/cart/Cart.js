import React,  {useContext} from 'react'
import {CartMenuContext} from './CartMenuProvider'
import {CartContext} from '../addToCartButton/CartContext';
import CartIsEmpty from './cartisempty/CartIsEmpty'
import CartWithItems from './cartwithitems/CartWithItems'
import { slide as Menu } from 'react-burger-menu'
import './Cart.css'

export default function Cart(props) {
    const [cart] = useContext(CartContext);
    const menuHandler = useContext(CartMenuContext)

        return (
        <div>
                <Menu right width={350} 
                    isOpen={menuHandler.isMenuOpen}
                    onStateChange={(state) => menuHandler.stateChangeHandler(state)}
                    customBurgerIcon={<i className="fa fa-shopping-cart" aria-hidden="true"/>}
                    burgerButtonClassName={ "cartButton" }>
                    {cart >= 0 ? <CartIsEmpty/> : <CartWithItems/>}
                </Menu>  
        </div>
    )
}
