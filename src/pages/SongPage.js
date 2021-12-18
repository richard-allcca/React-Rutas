import { useParams } from "react-router-dom";
import SongDetails from "../ApiSong/song-page/SongDetails";

const SongPage = ({ mySongs }) => {
  let { id } = useParams(); //?  nombre de param en path="/:id"
  // console.log(id, mySongs, mySongs[id]);

  let currentSong = mySongs[id];
  let { search, lyric, bio } = currentSong;

  return (
    <>
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </>
  );
};

export default SongPage;

// Notas:
// flujo:
// SongSearch => SongPage => SongDetails => SongLyrics - SongArtist
// useParams: obtiene el valor de la variable en la url
// mySongs: array de canciones guardadas en el ls
