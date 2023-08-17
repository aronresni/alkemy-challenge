
import './App.css';
import { Routes, Route } from "react-router-dom"
//componentes
import Login from './components/Login';
import Listado from './components/Listado';
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/listado' Component={Listado} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
