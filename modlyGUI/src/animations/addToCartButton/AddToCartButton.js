import React, {useContext, useState} from 'react'
import {CartMenuContext} from '../../components/cart/CartMenuProvider'
import {CartContext} from '../../pages/contact/CartContext';
import {MeshContext} from './MeshContext'

export default function AddToCartButton(props) {
    
    const menuHandler = useContext(CartMenuContext);
    const [meshObjects, setMeshObjects] = useContext(MeshContext);
    const [cart, setCart] = useContext(CartContext);

    const addMeshToCart = () => {
        /* setMeshObjects(props.meshObjectValues) */
        setCart(currentState => [...currentState, props.meshObjectValues])
       /*  console.log(props.meshObjectValues) */
       /*  console.log({meshObjects}) */
    }

    return (
        <div>
            <button onClick={menuHandler.toggleMenu}>Open Cart</button>
            <button onClick={addMeshToCart}>Add Mesh to Cart</button>
        </div>
    )
}
