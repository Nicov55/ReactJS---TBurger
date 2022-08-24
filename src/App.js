import './assets/css/estilos.css';
import NavBar from './assets/NavBar';
import Header from './assets/Header';
import Main from './assets/Main';
import Footer from './assets/Footer';
import imagenes from './assets/imagenes';

function App() {

  return (
    <div className="container-fluid">
      <NavBar />
      <hr />
      <Header />
      <hr />
      <Main />
      <hr />
      <Footer />
      <hr />
    </div>
  );
}

export default App;
