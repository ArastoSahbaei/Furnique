import React from 'react'
import './CartIsEmpty.css'
import Spinneeer from '../../../shared/images/empty_cart.png'
import RainDrop from '../../../shared/images/raindrop.png'

const CartIsEmpty = () => {
    return (
        <div>
              <img className="rainDropImage" src={RainDrop} alt="SpinnereeLogo"/>
              <img className="cartIsEmptyLogo" src={Spinneeer} alt="SpinnereeLogo"/>
                    <h1>The cart is empty</h1>
                    <button /* className="browseProducts" */> <span>Browse products </span> </button> 
                    <button /* className="createYourOwn" */>  <span>Design your own </span> </button> 
                    <button /* className="getInspired" */>    <span>Get inspiration </span> </button> 
        </div>
    )
}

export default CartIsEmpty
