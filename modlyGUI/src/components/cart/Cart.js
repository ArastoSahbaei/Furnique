import React,  {useContext} from 'react'
import {CartMenuContext} from './CartMenuProvider'
import {CartContext} from '../addToCartButton/CartContext';
import { slide as Menu } from 'react-burger-menu'
import './Cart.css'

export default function Cart(props) {
    const [cart] = useContext(CartContext);
    const menuHandler = useContext(CartMenuContext)

    const lol = () => {
        console.log({cart})
    }
        return (
        <div>
                <Menu right width={350} 
                    isOpen={menuHandler.isMenuOpen}
                    onStateChange={(state) => menuHandler.stateChangeHandler(state)}
                    customBurgerIcon={<i className="fa fa-shopping-cart" aria-hidden="true"/>}
                    burgerButtonClassName={ "cartButton" }>

                        <h1>Your Cart</h1>
                        <span>items in cart : {cart.length}</span>


                {cart.map(item => (
                <div>
                    <h1>Marble Table</h1>
                    <span> BordsBredd: {item} </span>
                    <span> Bordslängd: {item} </span>
                    <hr />
                </div>
                ))}
<button onClick={lol}>ddddddd</button>
                    <span><button onClick={menuHandler.toggleMenu}>Keep Shopping</button> <button>Checkout</button></span>
                </Menu>  
        </div>
    )
}
