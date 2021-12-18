const SongLyrics = ({ title, lyric, artist }) => {
  return (
    <section>
      <h3>{artist}</h3>
      <h4>{title}</h4>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyric}</blockquote>
    </section>
  );
};

export default SongLyrics;
