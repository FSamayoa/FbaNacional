import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to="/home">Inicio</Link>
        <Link to="/resultados">Resultados</Link>
        <Link to="/calendario">Calendario</Link>
        <Link to="/posiciones">Posiciones</Link>
        <Link to="/estadisticas">Estadisticas</Link>
        <Link to="/equipos">Equipos</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/comunidad">Comunidad</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/historia">Historia</Link>
        <Link to="/tienda">Tienda</Link>
        <Link to="/aprende">Aprende de FBA</Link>
     
    </div>
  );
};

export default Nav;
