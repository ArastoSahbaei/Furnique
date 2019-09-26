import React, {useContext, useState} from 'react'
import {CartMenuContext} from '../../components/cart/CartMenuProvider'
import {CartContext} from '../../pages/contact/CartContext';
import {MeshContext} from './MeshContext'

export default function AddToCartButton(props) {
    
    const menuHandler = useContext(CartMenuContext);
    const [meshObjects, setMeshObjects] = useContext(MeshContext);
    const [cart, setCart] = useContext(CartContext);

    const display = () => {
        /* setMeshObjects(props.meshObjectValues) */
        setCart(currentState => [...currentState, props.meshObjectValues])
       /*  console.log(props.meshObjectValues) */
       /*  console.log({meshObjects}) */
    }

    return (
        <div>
            {/* TODO:
             1. Add the object to cart
             2. Display the object in the cart menu 
             */}
            <button onClick={menuHandler.toggleMenu}>Open Cart</button>
            <button onClick={display}>Add Mesh to Cart</button>
        </div>
    )
}
