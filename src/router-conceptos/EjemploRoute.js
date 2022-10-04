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
          {/*  1 Uso simple  */}
          <Route exact path="/">
            <h3>Home</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              error?
            </p>
          </Route>

          {/* 2 Usando component */}
          <Route exact path="/acerca" component={Acerca} />

          {/* 3 Usando children */}
          <Route exact path="/contacto" children={<Contacto />} />
        </Switch>
      </Router>
    </div>
  );
};

export default EjemploRoute;

// Notas:
// Ejemplos de uso para Route en Router
// 1. Metodo simple
// 2. con component puedes pasar solo el nombre del compónente como prop
// 3. con children se pasa el tag del componente dentro de la prop children
