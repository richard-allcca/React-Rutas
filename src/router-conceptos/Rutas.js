import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import Links from "./Links";
import PrivateRoute from "./PrivateRoute";

const Rutas = () => {
  return (
    <div>
      <h2>Tipos de uso con Link </h2>
      <Router>
        <Links />

        {/* 1 Rutas simples*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />

          {/* 2 Rutas con parametros & parametros de consulta */}
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route exact path="/productos" component={Productos} />

          {/* Rutas con Redireccion */}
          <Route exact path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto" />
          </Route>

          {/* 3 Rutas Anidadas */}
          <Route path="/react" component={ReactTopics} />

          {/* 4 Rutas Privadas*/}
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          {/* 5 */}
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};
export default Rutas;

// Notas:
// 1. Switch
// 1.1 funciona como una lista de rutas, filtra y solo permite una ruta activa

// 2. Tipos de ruta
// 2.1 Rutas con parametros "nameParam/:valorParam" - parametros consulta "/valueParam"
// 2.3 Rutas con redirection - usa Redirect dentro de Route con tag de apertura y cierre
// 2.3 Rutas anidadas - NO uses "exact" por crear rutas dinamicas
// 2.4 Rutas privadas - USA "PrivateRoute" para proteger rutas

// 3. Menu de navegacion con Link ln/25
