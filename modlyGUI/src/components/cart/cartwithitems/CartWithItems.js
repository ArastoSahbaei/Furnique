import React, {useContext} from 'react'
import {CartMenuContext} from '../CartMenuProvider'
import {CartContext} from '../../addToCartButton/CartContext';
import { NavLink } from 'react-router-dom'
import './CartWithItems.css'
import Spinner from '../../../shared/images/marble.jpg'
const CartWithItems = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const menuHandler = useContext(CartMenuContext)

    const displayMeshParameters = () => {
        console.log({cart})
    }

    const deleteItem = (uniqueId) => {
        const remainingItems = cart.filter(item=>item.id !== uniqueId)
        setCart(remainingItems) 
    }

    return (
        <div>
            <span className="itemsInCart">Your cart contains {cart.length} item </span> 
            {cart.map((item, index) => (
                <div className="itemsInCartDisplay" key={item.id}>
                    <i onClick={() => deleteItem(item.id)} className="fas fa-trash"/>

                    <ul className="displayItemsInCartUL">
                        <li><img className="cartImage" src={Spinner} alt="SpinnerLogo"/></li>
                        <li>Customized Table</li>
                        <li>Price: £236</li>
                        <li><button className="inspectDimensionsButton"><span>Inspect measurements</span></button></li>
                    </ul>
                    <hr/>

                    {/* <span className="statHolder"> BordsBredd: {item.bordsBredd} <br/></span>
                    <span className="statHolder"> Bordslängd: {item.Bordsdjup}  <br/></span>
                <span className="statHolder"> rotationSpeed: {item.rotationSpeed} </span>  */}                  
                </div>
                ))}


                    <button className="keepShoppingButton" onClick={menuHandler.toggleMenu}>
                        <span>Keep Shopping</span> 
                    </button> 
                    <NavLink to="/checkout"> 
                     <button className="checkoutButton" onClick={menuHandler.toggleMenu}> 
                        <span>Checkout</span> 
                     </button> 
                    </NavLink>

                    
                 {/* <button onClick={displayMeshParameters}>Show Parameters</button> */}
        </div>
    )
}

export default CartWithItems
