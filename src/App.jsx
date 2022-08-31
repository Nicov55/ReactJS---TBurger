import './assets/css/style.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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
