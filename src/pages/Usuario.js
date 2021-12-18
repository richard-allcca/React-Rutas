import { useParams } from "react-router-dom";

// ===============================
//? useParams
// ===============================

const Usuario = () => {
  let { username } = useParams();
  return (
    <div>
      <h3>Perfil del Usuario</h3>
      <p>
        Nombre de Usuario <b>{username}</b>{" "}
      </p>
    </div>
  );
};

export default Usuario;

// Notas:
// 1. Nos permite obtener los parametros de la ruta
// 2. Nos permite tener rutas amigables
// 3. Conceptos en ConceptosBasicos/HooksRoute.js
