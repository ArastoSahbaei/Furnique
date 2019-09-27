import React, {useContext} from 'react'
import {CartMenuContext} from '../cart/CartMenuProvider'
import {CartContext} from './CartContext';

export default function AddToCartButton(props) {
    
    const menuHandler = useContext(CartMenuContext);
    const [cart, setCart] = useContext(CartContext);

    const addMeshToCart = () => {
        setCart(currentState => [...currentState, props.meshObjectValues])
    }

    return (
        <div>
            <button onClick={props.updateMeshState}>Set Mesh To State</button>
            <button onClick={addMeshToCart}>Add Mesh State To Cart</button>
            <button onClick={menuHandler.toggleMenu}>Open Cart</button>
        </div>
    )
}
