import React, {useContext} from 'react';
import { Table } from './Table';
import {CartContext} from './CartContext'

export const TableList = () => {

  const [cart, setCart] = useContext(CartContext);

  const database = [
    { name: "Marble Dining Table", price: 160.99, id: 1 },
    { name: "Wooden Coffe Table",  price: 240.99, id: 2 },
    { name: cart.BordsBredd, price: 384.99, id: 1 },
    { name: cart.BordsBredd, price: 232.99, id: 1 },
    { name: cart.BordsBredd, price: 111.99, id: 1 },
  ]

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