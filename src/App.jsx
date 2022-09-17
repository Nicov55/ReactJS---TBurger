import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './assets/css/style.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/Producto/Detalles/ItemDetailContainer';
import CartProvider from './context/CartContext';


function App() {

  return (
    <BrowserRouter>
      <CartProvider value='Nicolas'>
        <NavBar />
        <hr />
        <Header />
        <hr />
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/home' element={<Home />}> </Route>
            <Route path='/detail/:detailId' element={<ItemDetailContainer />}> </Route>
            <Route path='/nosotros' element={<Nosotros />}> </Route>
            <Route path='/cart' element={<Cart />}> </Route>
          </Routes>
        <hr />
        <Footer />
        <hr />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
