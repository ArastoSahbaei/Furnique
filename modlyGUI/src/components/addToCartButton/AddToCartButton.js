import React, {useContext} from 'react'
import {CartMenuContext} from '../cart/CartMenuProvider'
import {CartContext} from './CartContext';
import './AddToCartButton.css'

export default function AddToCartButton(props) {
    
    const menuHandler = useContext(CartMenuContext);
    const [cart, setCart] = useContext(CartContext);

    const addMeshToCart = () => {
        setCart(currentState => [...currentState, {...props.meshObjectValues, id: Date.now()}])
        menuHandler.toggleMenu()
    }

    return (
        <div>
            <button className="addToCartButton" onClick={addMeshToCart}><span>Add to cart</span></button>
        </div>
    )
}
