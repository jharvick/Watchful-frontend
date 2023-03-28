import axios from "axios";
import { useState, useEffect } from "react";

export function ItemsNew(props) {
  const [searchTerms, setSearchTerms] = useState("");
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateItem(params, () => event.target.reset());
    window.location.href = "/items";
  };

  const handleIndexMovies = () => {
    axios.get("http://localhost:3000/movies.json?search_terms=" + searchTerms).then((response) => {
      console.log("handleIndexMovies", response.data);
      setMovies(response.data);
    });
  };

  const handleSelect = (movie) => {
    console.log(movie);
    setName(movie.Title);
    setImage(movie.Poster);
    setCategory(movie.Type);
    setDescription(movie.Year);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>What to watch?</h1>
          <div>
            Search: <input value={searchTerms} onChange={(event) => setSearchTerms(event.target.value)} type="text" />
            <button onClick={handleIndexMovies}>Submit!</button>
          </div>
          <div>
            {movies.map((movie) => (
              <div key={movie.imdbID}>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt="" width="200" />
                <p>{movie.Type}</p>
                <p>{movie.Year}</p>
                <button onClick={() => handleSelect(movie)}>Select</button>
              </div>
            ))}
          </div>
        </div>
        <div className="col">
          <h1>New watch</h1>
          <form onSubmit={handleSubmit}>
            <div>
              Name: <input value={name} onChange={(event) => setName(event.target.value)} name="name" type="text" />
            </div>
            <div>
              Image:{" "}
              <input value={image} onChange={(event) => setImage(event.target.value)} name="image_url" type="text" />
            </div>
            <div>
              Category:{" "}
              <input
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                name="category"
                type="text"
              />
            </div>
            <div>
              Year:{" "}
              <input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                name="description"
                type="text"
              />
            </div>
            <button type="submit">Create watch</button>
          </form>
        </div>
      </div>
    </div>
  );
}
