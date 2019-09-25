import React,  {useContext} from 'react'
import {CartMenuContext} from './CartMenuProvider'
import { slide as Menu } from 'react-burger-menu'
import './Cart.css'

export default function Cart() {

    const menuHandler = useContext(CartMenuContext)

        return (
        <div>
                <Menu right width={350} 
                    isOpen={menuHandler.isMenuOpen}
                    onStateChange={(state) => menuHandler.stateChangeHandler(state)}
                    customBurgerIcon={<i className="fa fa-shopping-cart" aria-hidden="true"/>}
                    burgerButtonClassName={ "cartButton" }>
                    <h1>Your Cart</h1>
                    <span><button onClick={menuHandler.toggleMenu}>Keep Shopping</button> <button>Checkout</button></span>
                </Menu>  
        </div>
    )
}
