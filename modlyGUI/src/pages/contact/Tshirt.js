import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Buttonz from '../../animations/addToCartButton/AddToCartButton'

export const Tshirt = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = { name: props.name, price: props.price };
    setCart(currentState => [...currentState, tshirt]);
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button onClick={addToCart}><Buttonz/></button>
      <hr />
    </div>
  )
}