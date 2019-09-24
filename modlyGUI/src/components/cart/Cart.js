import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Cart.css'

export default function Cart() {
    const roflmao = sessionStorage.getItem("meshObject")
    const gogo = JSON.parse(roflmao)
        return (


        <div>
            <Menu right width={350} 
                  isOpen={false} 
                  customBurgerIcon={<i className="fa fa-shopping-cart" aria-hidden="true"/>}
                  burgerButtonClassName={ "cartButton" }>

                        <h1>Your Cart</h1>
                        <span>Item: Black Marble table</span>
                        <span>Price: £325.99</span> 
                        <br></br>
                        <span>BenBredd: {gogo.BenBredd} </span>
                        <span>BenHöjg:  {gogo.BenHöjd}  </span>
                        <span>BenLängd: {gogo.BenLängd} </span>

                      <span> <button>Keep Shopping</button> <button>Checkout</button> </span>
                   
                  </Menu>  
                  {console.log({gogo})}
                  {console.log({gogo})}
                  {console.log({gogo})}
        </div>
    )
}
