import Message from "./../../component/Message";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null; //evita renderizado innecesario
  // console.log(lyric, bio);
  return (
    <>
      {!lyric || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error:  puede encontrar la cancion "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyrics
          lyric={lyric.lyrics}
          title={search.song}
          artist={search.artist}
        />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe o no se encuentra bio de el Interprete "${search.artist}"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
