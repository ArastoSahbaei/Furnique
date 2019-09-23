import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Cart.css'

export default function Cart() {
    return (
        <div>
            <Menu right width={350} 
                  isOpen={false} 
                  id={"testi"} className={ "my-menu" } 
                  customBurgerIcon={<i className="fa fa-shopping-cart" aria-hidden="true"/>}
                  burgerButtonClassName={ "cartButton" }>

                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                  </Menu>  
        </div>
    )
}
