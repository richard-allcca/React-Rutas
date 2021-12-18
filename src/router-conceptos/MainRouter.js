import EjemploRoute from "./EjemploRoute";
import Rutas from "./Rutas";
import RutasHasRouter from "./RutasHasRouter";

const MainRouter = () => {
  return (
    <div>
      <Rutas />
      <hr />
      <RutasHasRouter />
      <hr />
      <EjemploRoute />
      <hr />
    </div>
  );
};

export default MainRouter;

//* Notas:
// 1. en rutas anidadas no uses "exact" porque son rutas relativas ln 41
// 2. Router - Ejemplo de uso con exact, Redirect
// 3. HasRouter - Ejemplo de uso con Link, Switch
