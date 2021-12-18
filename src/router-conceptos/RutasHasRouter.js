import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

const RutasHasRouter = () => {
  return (
    <div>
      <h2>Has Router - Concepto Basico</h2>
      <cite>
        Le da un has "#" a los enlaces para acceder a los diferentes contenidos
        de la pagina - Este metodo del <b>HasRouter</b> te ayuda en caso de que
        no tengas un respaldo de parte del Backend para serverRender.
      </cite>
      <br />
      <br />
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default RutasHasRouter;

// Notas:
// - Es muy importante usarlo para cuando ingresen con una url especifica de tu pagina
// - El <HashRouter> le da un "#"" a los enlaces para acceder a todos los archivos internos o paginas.
// - El <HashRouter> es un componente que te permite acceder a los diferentes contenidos de la pagina sin tener que tener un respaldo de parte del Backend para serverRender.
