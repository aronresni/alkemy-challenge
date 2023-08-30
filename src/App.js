
import './App.css';
import { Routes, Route } from "react-router-dom"


//componentes
import Login from './components/Login';
import Listado from './components/Listado';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Detalle from './components/Detalle';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/listado' Component={Listado} />
        <Route path='/detalle' Component={Detalle} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
