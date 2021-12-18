import { useHistory, useLocation } from "react-router-dom";

const Productos = () => {
  // let location = useLocation();
  // console.log(location);

  // ===============================
  //? useLocation: obtiene el valor de las varaibles en la url
  // ===============================
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  // console.log(query);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  // console.log(start, end);

  // ===============================
  //? UseHistory: modifica la url
  // ===============================
  let history = useHistory();
  // console.log(history);

  const handlePrev = (e) => {
    history.push({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
  };

  const handleNext = (e) => {
    history.push({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando Productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start !== 1 && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;

// Notas:
//  Paginación de ejemplo en este componente.

// 1. useLocation() tiene metodos para obtener valores de la url
// 1.1 get(nameVariable) obtiene el valor de una variable en la url

// 2. useHistory() tiene metodos para manipular la url
// 2.1 push({search}) modifica la url para enviar una nueva variable u objeto
