import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Inicio } from './Paginas/Inicio/Inicio';
import { Header } from './Componentes/Header/Header';
import Login from './Paginas/Login/Login';
import Registro from './Paginas/Registro/Registro';
import CrearArticulo from './Paginas/CrearArticulo/CrearArticulo';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicioSesion' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/crearArticulo' element={<CrearArticulo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
