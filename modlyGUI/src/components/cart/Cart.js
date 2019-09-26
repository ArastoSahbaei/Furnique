import React,  {useContext} from 'react'
import {CartMenuContext} from './CartMenuProvider'
import {CartContext} from '../../pages/contact/CartContext';
import { slide as Menu } from 'react-burger-menu'
import './Cart.css'

export default function Cart(props) {
    const [cart, setCart] = useContext(CartContext);
/*     const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0); */
    const menuHandler = useContext(CartMenuContext)

    const displayMyCart = () => {
        {console.log(cart[0].Bordsbredd)}
        {console.log(cart)}
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
               {/*      <span>total price : {totalPrice}£</span> */}
                    <span><button onClick={menuHandler.toggleMenu}>Keep Shopping</button> <button>Checkout</button></span>

                   <button onClick={displayMyCart}>DISPLAY MY CART</button>

                </Menu>  
        </div>
    )
}
