import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ContentPerfil from "./ContentPerfil";
import Home from "./Home";

const Perfil = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <aside>
        <ul>
          <li>
            <Link to={`${url}/inicio`}>inicio</Link>
          </li>
          <li>
            <Link to={`${url}/contentPerfil`}>Content Perfil</Link>
          </li>
        </ul>
      </aside>

      <section>
        <h4>Este es el Body</h4>
        <Switch>
          <Route path={`${path}/inicio`} component={Home} />
          <Route path={`${path}/contentPerfil`} component={ContentPerfil} />
        </Switch>
      </section>
    </>
  );
};

export default Perfil;
