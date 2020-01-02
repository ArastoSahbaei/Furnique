import React, {useContext} from 'react'
import {CartMenuContext} from '../CartMenuProvider'
import {CartContext} from '../../addToCartButton/CartContext';
import { NavLink } from 'react-router-dom'
import './CartWithItems.css'
import Spinner from '../../../shared/images/marble.jpg'
const CartWithItems = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const menuHandler = useContext(CartMenuContext)

/*     const displayMeshParameters = () => {
        console.log({cart})
    } */

    const deleteItem = (uniqueId) => {
        const remainingItems = cart.filter(item=>item.id !== uniqueId)
        setCart(remainingItems) 
    }

    return (
        <div>
            <span className="itemsInCart">Your cart contains {cart.length} {(cart.length === 1 ? "item" : "items")} </span> 
            {cart.map((item, index) => (
                <div className="itemsInCartDisplay" key={item.id}>
                    <i onClick={() => deleteItem(item.id)} className="fas fa-trash"/>

                    <ul className="displayItemsInCartUL">
                        <li><img className="cartImage" src={Spinner} alt="SpinnerLogo"/></li>
                        <li>Customized Table</li>
                        <li>Price: £1294</li>
                        
                        <li><button className="inspectDimensionsButton"><span>Inspect measurements</span></button></li>
                    </ul>
                    <hr/>

                    {/* <span className="statHolder"> BordsBredd: {item.bordsBredd} <br/></span>
                    <span className="statHolder"> Bordslängd: {item.Bordsdjup}  <br/></span>
                <span className="statHolder"> rotationSpeed: {item.rotationSpeed} </span>  */}                  
                </div>
                ))}

                <div className="bottomPart">
                    <ul className="bottomPartUL">
                        <li> 
                            <span className="displayRight">Total:</span> 
                            <span className="displayLeft">£{cart.length  * 1294}</span> <br/>
                        </li> 
                        <li>   
                            <span className="displayRight">Shipping:</span> 
                            <span className="displayLeft">Free</span>
                        </li>
                    </ul>
                    <br/>
                    <div className="bottomButtons">
                        <button className="keepShoppingButton" onClick={menuHandler.toggleMenu}> <span>Keep Shopping</span> </button> 
                        <NavLink to="/checkout"> 
                        <button className="checkoutButton" onClick={menuHandler.toggleMenu}> <span>Checkout</span> </button> 
                        </NavLink>
                    </div>
                </div>

                    
                 {/* <button onClick={displayMeshParameters}>Show Parameters</button> */}
        </div>
    )
}

export default CartWithItems
