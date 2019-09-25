import React from 'react';
import { Table } from './Table';

export const TableList = () => {

  const database = [
    { name: "Marble Dining Table", price: 160.99, id: 1 },
    { name: "Wooden Coffe Table",  price: 240.99, id: 2 },
  ]

  return (
    <div>
      {
        database.map(item => (
          <Table name={item.name} price={item.price} key={item.id} />
        ))
      }
    </div>
  )
}