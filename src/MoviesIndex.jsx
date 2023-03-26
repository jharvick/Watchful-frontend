export function MoviesIndex(props) {
  return (
    <div>
      <h1>What to watch?</h1>
      {props.movies.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt="" width="200" />
          <p>{movie.Type}</p>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}
