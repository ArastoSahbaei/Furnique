import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import {MeshContext} from '../../animations/addToCartButton/MeshContext'

export const Cart = () => {

  const [meshObjects, setMeshObjects] = useContext(MeshContext);

  const [cart] = useContext(CartContext);
/*   const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0); */

  return (
    <div>
      <span>items in cart : {cart.length}</span>
    </div>
  )
}