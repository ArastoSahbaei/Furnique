import React from 'react';
import './App.css'
import NavigationBar from './components/navigationbar/NavigationBar'
import {CartMenuProvider} from './components/cart/CartMenuProvider'
import { CartProvider } from './pages/contact/CartContext'
import { MeshProvider } from './animations/addToCartButton/MeshContext'
import Footer from './components/footer/Footer'

function App() {
  return (
      <CartMenuProvider>
      <MeshProvider>
      <CartProvider>
          <div className="App">
              <NavigationBar/>
              <Footer/>
          </div>
      </CartProvider>
      </MeshProvider>
      </CartMenuProvider>
  );
}

export default App;
