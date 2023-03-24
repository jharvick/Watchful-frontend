export function MoviesIndex(props) {
  return (
    <div>
      <h1>All movies</h1>
      {props.movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <img src={movie.urlToImage} alt="" width="400" />
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}
