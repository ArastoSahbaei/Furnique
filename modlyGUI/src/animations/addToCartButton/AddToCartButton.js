import React, {useContext} from 'react'
import {CartMenuContext} from '../../components/cart/CartMenuProvider'
import {CartContext} from '../../pages/contact/CartContext';

export default function AddToCartButton(props) {
    
    const menuHandler = useContext(CartMenuContext);
    const [cart, setCart] = useContext(CartContext);

    const addMeshToCart = () => {
        setCart(currentState => [...currentState, props.meshObjectValues])
    }

    return (
        <div>
            <button onClick={menuHandler.toggleMenu}>Open Cart</button>
            <button onClick={addMeshToCart}>Add Mesh to Cart</button>
        </div>
    )
}
