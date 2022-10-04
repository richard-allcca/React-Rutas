import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Admin from "./Admin";
import Perfil from "./Perfil";

const Practice = () => {
  return (
    <div>
      <Router>
        <aside>
          <section className="">
            <div className="">
              <FontAwesomeIcon icon={faHome} />
              <NavLink exact to="/home" activeClassName="active">
                Administration
              </NavLink>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faUser} />
              <NavLink exact to="/userLogged" activeClassName="active">
                Perfil Usuario
              </NavLink>
            </div>
          </section>
        </aside>

        <Switch>
          <Route path="/home" component={Admin} />
          <Route path="/userLogged" component={Perfil} />
        </Switch>
      </Router>
    </div>
  );
};

export default Practice;
