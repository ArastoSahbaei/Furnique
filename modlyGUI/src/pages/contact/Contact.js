import React from 'react'
import './Contact.css'
import { Cart } from './Cart.js'
import { CartProvider } from './CartContext'
import { TshirtList } from './TshirtList'
import { slide as Menu } from 'react-burger-menu'

export default function Contact() {

    return (
        <div>
            <CartProvider>
                < Cart />
                <TshirtList />
            </CartProvider>
        </div>
    )
}
