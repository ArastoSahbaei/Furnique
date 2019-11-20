import React from 'react';
import './shared/design/KeyFrames.css'
import './shared/design/GlobalCSS.css'
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
