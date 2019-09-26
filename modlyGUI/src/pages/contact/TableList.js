import React, {useContext} from 'react';
import { Table } from './Table';
import {CartContext} from './CartContext'

export const TableList = () => {

  const [cart, setCart] = useContext(CartContext);

  return (
    <div>
      {
        cart.map(item => (
          <Table name={item.Bordsbredd} name2={item.Bordsbredd}/>
        ))
      }
    </div>
  )
}