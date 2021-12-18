import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";

const EjemploRoute = () => {
  return (
    <div>
      <h2>Ejemplos de uso para Route In Router</h2>
      <ul>
        <li>Modo Simple</li>
        <li>Con Componentes</li>
        <li>Con Children</li>
      </ul>
      <Router>
        <Switch>
          {/*  1  */}
          <Route exact path="/">
            <h3>Home</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              error?
            </p>
          </Route>

          {/* 2  */}
          <Route exact path="/acerca" component={Acerca} />

          {/* 3 */}
          <Route exact path="/contacto" children={<Contacto />} />
        </Switch>
      </Router>
    </div>
  );
};

export default EjemploRoute;

// Notas:
// 1.  Ejemplos de uso para Route en Router
// 2. Metodo simple
// 3. Usando component
// - con component puedes solo pasar el nombre del compónente component={NameComponente}
// 4. Usando children
// - con children se declara el componente dentro de llaves children={<Componente/>}
