import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

// =================================================================
//? Component de ejemplo para renderizar contenido con rutas anidadas
// =================================================================
const Topic = () => {
  let { topic } = useParams();
  // console.log(topic);
  return (
    <div>
      <h5>este el el contenido del body</h5>
      <p>Elegiste el tema de: {topic}</p>
      <p>
        <b>Este componente "Topic" esta dentro del componente ReactTopics.</b>
        <br />
        ejemplo para mostrar contenido gracias a las rutas anidadas
      </p>
    </div>
  );
};

const ReactTopics = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <header>
        <h3>Temas de React con Rutas Anidadas</h3>
        <p>
          Estos enlaces internos no usan "exact" por que se manejan con rutas
          relativas
        </p>
      </header>

      <aside>
        <ul>
          <li>
            <Link to={`${url}/jsx`}>JSX</Link>
          </li>
          <li>
            <Link to={`${url}/props`}>Props</Link>
          </li>
          <li>
            <Link to={`${url}/estado`}>Estado</Link>
          </li>
          <li>
            <Link to={`${url}/componentes`}>Componentes</Link>
          </li>
        </ul>
      </aside>

      <section>
        <h4>Este es el Body</h4>
        <Switch>
          <Route exact path={path}>
            <h4>Elige un tema de React</h4>
          </Route>
          <Route path={`${path}/:topic`} component={Topic} />
        </Switch>
      </section>

      <footer>
        <h4>Este es el Footer</h4>
      </footer>
    </>
  );
};
export default ReactTopics;
// Notas:
// 1. useRouteMatch() es una funcion que nos permite obtener la ruta actual
// 'path' nos permite contruir rutas relativas en <Route/>
// 'url' nos permite construir enlaces relativos en <Link/> o <NavLink/>
// Ejemplos: este componente tiene "Link" y "Route" donde usamos "path" y "url"
