import './App.css'
import Encabezado from './header/Headerr'
import Nav from './nav/Nav'
import Resultados from './resultados/Resultados';
import { Routes, Route, Navigate } from "react-router-dom";
function App() {


  return (
      <div>
        <Encabezado/>
        <Nav/>
        <Routes>
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/calendario" element={<Resultados />} />
        <Route path="/posiciones" element={<Resultados />} />
        <Route path="/estadisticas" element={<Resultados />} />
        <Route path="/equipos" element={<Resultados />} />
        <Route path="/videos" element={<Resultados />} />
        <Route path="/comunidad" element={<Resultados />} />
        <Route path="/contacto" element={<Resultados />} />
        <Route path="/historia" element={<Resultados />} />
        <Route path="/tienda" element={<Resultados />} />
        <Route path="/aprende" element={<Resultados />} />
        
        <Route path="*" element={<Navigate to="/inicio" />} />
      </Routes>
      </div>

  )
}

export default App
