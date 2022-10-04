import React, { useEffect, useState } from "react";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";
import Loader from "../component/Loader";
import Message from "../component/Message";
import CrudForm from "../crud/CrudForm";
import CrudTable from "../crud/CrudTable";
// components
import { helperHttp } from "../helpers/helperHttp";
import Error404 from "../pages/Error404";

export const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setdataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helperHttp(); //comentado para evitar el warning de []
  let url = "http://localhost:8080/santos";

  useEffect(() => {
    setLoading(true);
    helperHttp()
      .get(url)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setError(res);
          setDb(null);
        }
        setLoading(false);
      });
  }, [url]);

  // =================================================================
  //? CREATE
  // =================================================================
  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api
      .post(url, options)
      // .post(url, { body: data })
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb([...db, res]); // lo que tiene db y le agrega la q viene en res
        } else {
          setError(res);
        }
      });
  };

  // =================================================================
  //? UPDATE
  // =================================================================
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    console.log(endpoint);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      // console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  // =================================================================
  //? DELETE
  // =================================================================
  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Estas seguro de Eliminar el ID ${id}?`);

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData); //agregamos contenido filtrando el id del parametro
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  // =================================================================
  return (
    <>
      <HashRouter basename="santos">
        <header>
          <h2>Crud API con Rutas</h2>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Santos
            </NavLink>
            <NavLink to="/agregar" activeClassName="active">
              Agregar
            </NavLink>
          </nav>
        </header>

        <article className="grid-1-2">
          <h2> CRUD </h2>
          <Switch>
            <Route exact path="/">
              {loading && <Loader />}
              {error && (
                <Message
                  bgColor="#dc3545"
                  msg={`Error ${error.status}: ${error.statusText} `}
                />
              )}
              {db && (
                <CrudTable
                  data={db}
                  setdataToEdit={setdataToEdit}
                  deleteData={deleteData}
                />
              )}
            </Route>
            <Route exact path="/agregar">
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setdataToEdit={setdataToEdit}
              />
            </Route>
            <Route exact path="/editar/:id">
              <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setdataToEdit={setdataToEdit}
              />
            </Route>
            <Route path="*" children={<Error404 />}></Route>
          </Switch>
        </article>
      </HashRouter>
    </>
  );
};

export default CrudApi;

// Notas:
// 1. basename - propiedad del HashRouter para no repetir nombre el los Route
// Ejemplo ln/142 ln/150
