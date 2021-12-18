import { Link, NavLink } from "react-router-dom";

// todo: ln/36 aun queda pendiente el resto de ejemplos con link
const Links = () => {
  return (
    <nav>
      <ul>
        <strong>Enlaces html normales - no recomendado</strong>
        <li>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>

        <strong>Componentes Link - recomendado para enlaces </strong>
        <li>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>

        <strong>Componentes NavLink - recomendado para Menú </strong>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/acerca" activeClassName="active">
            Acerca
          </NavLink>
          <NavLink exact to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
        </li>

        <strong>Links con Parámetros - nameParam/valorParam </strong>
        <li>
          <Link to="/usuario/richard">Richard</Link>
          <Link to="/usuario/kenay">Kenay</Link>
        </li>

        <strong>Parámetros de consulta - /nameParam </strong>
        <li>
          <Link to="/productos">Productos</Link>
        </li>

        <strong>Redirecciones: </strong>
        <li>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>

        <strong>Rutas Anidadas: </strong>
        <li>
          <Link to="/react">Temas de React</Link>
        </li>

        <strong>Rutas Privadas: </strong>
        <li>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;

// Notas:
// 1. No se puede usar Link fuera del Router solo al nivel de Switch
// 2. Link solo tiene la propiedad "to" y no "href"
// 3. NavLink tiene las propiedades "to", "activeClassName" y "exact"
// 3.1 "activeClassName" va en todos los enlaces y sus propiedades definilas en css
// 4. "Exact" es necesario en todas las rutas

// Rutas Privadas: para estas no debes usar "exact" debido a las subrutas que son relativas
// Ejemplos en PrivateRoute.js
