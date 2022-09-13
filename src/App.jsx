import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/Producto/Detalles/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter>
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
        <Footer />
        <hr />
    </BrowserRouter>
  );
}

export default App;
