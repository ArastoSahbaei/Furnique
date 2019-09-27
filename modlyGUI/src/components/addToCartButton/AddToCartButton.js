import React, {useContext} from 'react'
import {CartMenuContext} from '../cart/CartMenuProvider'
import {CartContext} from './CartContext';

export default function AddToCartButton(props) {
    
    const menuHandler = useContext(CartMenuContext);
    const [cart, setCart] = useContext(CartContext);

    const addMeshToCart = () => {
        setCart(currentState => [...currentState, props.meshObjectValues])
        menuHandler.toggleMenu()
    }

    return (
        <div>
            <button onClick={props.updateMeshState}>Set Mesh To State</button>
            <button onClick={addMeshToCart}>Add To Cart</button>
        </div>
    )
}
