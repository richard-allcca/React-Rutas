import { useHistory } from "react-router-dom";

const SongTableRow = ({ el, id, handleDeleteSong }) => {
  let { search, bio } = el;

  let avatar = !bio.artists ? bio.statusText : bio.artists[0].strArtistThumb;
  console.log(avatar, bio.artist);

  let history = useHistory();

  let avatarStyle = {
    //estilos img
    white: "auto",
    height: "40px",
  };

  return (
    <tr>
      <td>
        <img src={avatar} alt="Nombre" style={avatarStyle} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
