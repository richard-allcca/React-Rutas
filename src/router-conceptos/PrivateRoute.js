import { Redirect, Route } from "react-router-dom";

// ===============================
//? primer ejemplo (solo de muestra)
// export const PrivateRoute1 = (props) => {
//   return (
//     <Route exact={props.exact} path={props.path} component={props.component} />
//   );
// };

// ===============================
//? forma simplified
// export const PrivateRoute2 = (props) => {
//   return <Route {...props} />;
// };

//simulación de Autenticación
let auth;
auth = null;
auth = true;

// ===============================
//? forma Recomendada
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}> {auth ? <Component /> : <Redirect to="/login" />} </Route>
  );
};

export default PrivateRoute;

// Notas:
// ...rest. son el resto de props que vienen de "PrivateRoute" y se pasan a "Route"
// Route se encarga de renderizar el componente que se le pasa como prop mediante un validacion de la variable "auth" con un Operador Ternario.
//  Route, recibe un objeto {...rest} con las propiedades exact, path .
// {component: Component} para darle un alias y lo tome como componente para renderizar.

// ? es necesario darle un alias al component pasado como props para que no se caiga en un error de "component is not a function"
