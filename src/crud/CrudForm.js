import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const initialForm = {
  name: "",
  constellation: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setdataToEdit }) => {
  const [form, setForm] = useState(initialForm);
  let history = useHistory();

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  // ==============================================================
  const handleChange = (e) => {
    //? Control de cambios
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ==============================================================
  const handleSubmit = (e) => {
    //? Control de Formulario
    e.preventDefault();

    // valida la variable de estado form vacios
    if (!form.name || !form.constellation) {
      alert("Datos imcompletos");
      return;
    }

    // valida id para ejecutar crear o actualizar
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  // ==============================================================
  const handleReset = (e) => {
    //? Reseteo de Formulario
    setForm(initialForm); // resetea la variable de estado local
    setdataToEdit(null); // resetea la variable de estado en CrudForm
    history.push("/"); //redireccion a home
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelación"
          onChange={handleChange}
          value={form.constellation}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;

// Notas:
// Redirection con "history.push("/") en handlereset
