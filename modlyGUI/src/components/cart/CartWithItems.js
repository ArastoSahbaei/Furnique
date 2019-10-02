import React, {useContext} from 'react'
import {CartMenuContext} from './CartMenuProvider'
import {CartContext} from '../addToCartButton/CartContext';

const CartWithItems = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const menuHandler = useContext(CartMenuContext)

    const displayMeshParameters = () => {
        console.log({cart})
    }
    
    const deleteItem = (uniqueId) => {
        const remains = cart.filter(item=>item.id !== uniqueId)
        setCart(remains) 
    }

    return (
        <div>
            <span className="itemsInCart">Items in cart: {cart.length}</span>
            {cart.map((item, index) => (
                <div key={item.id}>
                    <h3>Marble Table <i onClick={() => deleteItem(item.id)} className="fas fa-trash"/></h3>
                    <span className="statHolder"> BordsBredd: {item.bordsBredd} <br/></span>
                    <span className="statHolder"> Bordslängd: {item.Bordsdjup}  <br/></span>
                    <span className="statHolder"> rotationSpeed: {item.rotationSpeed} </span>
                    <hr />
                </div>
                ))}
                <span><button onClick={menuHandler.toggleMenu}>Keep Shopping</button> <button>Checkout</button></span>
                 {/* <button onClick={displayMeshParameters}>Show Parameters</button> */}
        </div>
    )
}

export default CartWithItems
