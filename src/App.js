import './assets/css/estilos.css';
import Nav from './assets/Nav';
import Header from './assets/Header';
import Main from './assets/Main';
import Footer from './assets/Footer';
import imagenes from './assets/imagenes';

function App() {
  
  class Producto{
  constructor(id, nombre, precio, imagen, descripcion){
    this.id = id
    this.nombre = nombre.toUpperCase();
    this.precio = parseInt(precio);
    this.imagen = imagen;
    this.descripcion = descripcion.toUpperCase();
    this.detalles = [];
  }
};

const productos = [];
productos.push(new Producto(0, "CHEESE BURGER", 900, imagenes.cheeseburger, "Hamburguesa en pan de queso, con dos medallones de 120 gr y 4 fetas de queso cheddar con papas fritas"));

// SI NO COMENTO ESTO SE ROMPE
// productos.push(new Producto(1, "BACON BURGER", 1000, imagenes.cheesebaconburger.jpg, "Hamburguesa en pan de papa, con dos medallones de 120 gr, 4 fetas de queso cheddar, doble panceta ahumada y salsa BK con papas fritas"));
// productos.push(new Producto(2, "CRISPY BURGER", 1100, imagenes.crispyburger.jpg, "Hamburguesa en pan de papa, con dos medallones de 120 gr, 4 fetas de queso cheddar, doble panceta ahumada, cebolla crispy y salsa thousand island con papas fritas"));
// productos.push(new Producto(3, "AMERICAN BURGER", 1100, imagenes.americanburger.jpg, "Hamburguesa en pan de papa, con dos medallones de 120 gr, 4 fetas de queso cheddar , lechuga, tomate, pepino, cebolla y salsa BM con papas fritas"));
// productos.push(new Producto(4, "ONION BURGER", 1100, imagenes.onionburger.jpg, "Hamburguesa en pan de papa, con doble carne de 120gr smasheada con cebolla a la plancha y 4 fetas de queso cheddar con papas fritas"));
// productos.push(new Producto(5, "VEGGIE", 1000, imagenes.veggieburger.jpg, "Hamburguesa en pan de papa, medallon de lentejas, rucula, parmesano, tomate y salsa de albahaca con papas fritas"));

  return (
    <div className="container-fluid">
      <Nav />
      <hr />
      <Header />
      <hr />
      <Main />
      <div className="row">
        <div className="col-md-4 offset-md-2">
    <img src={productos[0].imagen} alt={productos[0].nombre} className = "img-fluid" />
    </div>
    <div className="col-md-4">
      <h1>{productos[0].nombre}</h1>
      <p>$ {productos[0].precio}</p>
      <p>{productos[0].descripcion}</p>
    </div>
    </div>
      <hr />
      <Footer />
      <hr />
    </div>
  );
}

export default App;
