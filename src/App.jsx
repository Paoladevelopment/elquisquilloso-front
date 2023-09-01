import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Inicio } from "./Paginas/Inicio/Inicio";
import { Header } from "./Componentes/Header/Header";
import Login from "./Paginas/Login/Login";
import Registro from "./Paginas/Registro/Registro";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicioSesion" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
