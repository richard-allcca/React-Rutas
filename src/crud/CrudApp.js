import React, { useState } from "react";

import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

//? API SIMULATION
const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragon",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id: 5,
    name: "Ikky",
    constellation: "Fenix",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb); //? inicia sus datos con..
  const [dataToEdit, setdataToEdit] = useState(null);

  // =================================================================
  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]); // lo que viene en db y le agrega lo que viene en data
  };

  // =================================================================
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  // =================================================================
  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas seguro de Eliminar el ID ${id}?`);

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData); //agregamos contenido fiiltrando el id del parametro
    } else {
    }
  };

  return (
    <>
      <h2> CRUD APP</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setdataToEdit={setdataToEdit}
        />
        <CrudTable
          data={db}
          setdataToEdit={setdataToEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );
};
