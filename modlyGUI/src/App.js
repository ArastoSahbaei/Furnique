import React from 'react';
import './App.css'
import NavigationBar from './components/navigationbar/NavigationBar'
import {CartMenuProvider} from './components/cart/CartMenuProvider'
import { CartProvider } from './components/addToCartButton/CartContext'
import Footer from './components/footer/Footer'

function App() {
  return (
      <CartMenuProvider>
      <CartProvider>
          <div className="App">
              <NavigationBar/>
              <Footer/>
          </div>
      </CartProvider>
      </CartMenuProvider>
  );
}

export default App;
