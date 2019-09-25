import React from 'react';
import './App.css'
import NavigationBar from './components/navigationbar/NavigationBar'
import {CartMenuProvider} from './components/cart/CartMenuProvider'
import Footer from './components/footer/Footer'

function App() {
  return (
      <CartMenuProvider>
    <div className="App">
      <NavigationBar/>
      <Footer/>
    </div>
      </CartMenuProvider>
  );
}

export default App;
