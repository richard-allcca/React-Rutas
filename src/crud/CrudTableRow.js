import React from "react";
import { useHistory } from "react-router-dom";

const CrudTableRow = ({ el, setdataToEdit, deleteData }) => {
  let { name, constellation, id } = el;
  let history = useHistory();

  const handleEdit = () => {
    setdataToEdit(el);
    history.push(`/editar/${id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        {/* <button onClick={() => setdataToEdit(el)}>Editar</button> */}
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;

// Notas:
// 1. useHistory para la redireccion ln/10
