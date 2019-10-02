import React, {useContext} from 'react'
import {CartMenuContext} from '../cart/CartMenuProvider'
import {CartContext} from './CartContext';

export default function AddToCartButton(props) {
    
    const menuHandler = useContext(CartMenuContext);
    const [cart, setCart] = useContext(CartContext);

    const addMeshToCart = () => {
        setCart(currentState => [...currentState, {...props.meshObjectValues, id: Date.now()}])
        menuHandler.toggleMenu()
    }

    return (
        <div>
            <button onClick={addMeshToCart}>Add To Cart</button>
        </div>
    )
}
