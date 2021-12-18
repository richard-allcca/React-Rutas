import React, { useEffect, useState } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Loader from "../component/Loader";
import { helperHttp } from "../helpers/helperHttp";
import Error404 from "../pages/Error404";
import SongPage from "../pages/SongPage";
import SongDetails from "./song-page/SongDetails";
import SongForm from "./song-search/SongForm";
import SongTable from "./song-search/SongTable";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit); // localStorage

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let urlArtists = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let urlSongs = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      // console.log(urlSongs);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helperHttp().get(urlArtists),
        helperHttp().get(urlSongs),
      ]);
      // console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);

      setLoading(false);
    };

    fetchData();

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    //? maneja el envio de formulario
    // console.log(data);
    setSearch(data);
    // setBio(data.artist);
    // setLyric(data.song);
  };

  const handleSaveSong = () => {
    alert("Salvandodo Canción en Favoritas");
    let currentSong = {
      search,
      lyric,
      bio,
    };

    let songs = [...mySongs, currentSong];

    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };

  const handleDeleteSong = (id) => {
    // alert(`Eliminando Cancion con el id:${id}`);
    let isDelete = window.confirm(
      `Estas seguro de Eliminar la canción con el id ${id}`
    );

    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };

  return (
    <div>
      <HashRouter basename="canciones">
        <header>
          <h2>SEARCH SONG</h2>
          <Link to="/">Home</Link>
        </header>

        {loading && <Loader />}

        <article className="grid-1-2">
          <Switch>
            <Route exact path="/">
              <SongForm
                handleSearch={handleSearch}
                handleSaveSong={handleSaveSong}
              />
              <SongTable
                mySongs={mySongs}
                handleDeleteSong={handleDeleteSong}
              />
              {search && !loading && (
                <SongDetails search={search} lyric={lyric} bio={bio} />
              )}
            </Route>

            <Route
              exact
              path="/:id"
              children={<SongPage mySongs={mySongs} />}
            ></Route>

            <Route path="*" children={<Error404 />} />
          </Switch>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;

// Notas:
// HashRouter con "basename" para usar en la ruta
// loading: entre header y article para cargas
// "mySongs" array de localStorage agregado al arreglo de dependencias en useEffect
// /:id, usamos children como alternativa para renderizar componentes

// flujo de componentes
// SongSearch => SongForm - SongTable - SongDetails
// SongTable => SongTableRow
//  SongPage => SongDetails => SongLyrics - SongArtist
