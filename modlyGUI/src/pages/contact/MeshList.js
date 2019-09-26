import React, {useContext} from 'react';
import { Table } from './Table';
import {CartContext} from './CartContext'

export const MeshList = () => {

  const [cart, setCart] = useContext(CartContext);

  return (
    <div>
      {
        cart.map(item => (
          <Table name={item.Bordsbredd}/>
        ))
      }
    </div>
  )
}