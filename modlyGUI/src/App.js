import React from 'react';
import './App.css'
import NavigationBar from './components/navigationbar/NavigationBar'
import { CartMenuProvider } from './components/cart/CartMenuProvider'
import { CartProvider } from './components/addToCartButton/CartContext'

function App() {
  return (
      <CartMenuProvider>
      <CartProvider>
          <div className="App">
              <NavigationBar/>
          </div>
      </CartProvider>
      </CartMenuProvider>
  );
}

export default App;
