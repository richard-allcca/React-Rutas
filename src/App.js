// import CrudApi from "./crud-api-json/CrudApi";
import SongSearch from "./ApiSong/SongSearch";
import "./App.css";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentación
      </a>
      <hr />
      {/* <CrudApi /> */}
      <hr />
      <SongSearch />
    </div>
  );
}

export default App;

// Notas:
// 1. La etiqueta a necesita el atributo target y rel
