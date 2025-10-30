
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import db from "../db.json";
const movies = db.movies;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <NavBar />
      <header>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time} minutes</p>
        <h3>Genres:</h3>
        <div>
          {movie.genres.map((genre) => (
            <span key={genre} style={{ marginRight: "8px" }}>
              {genre}
            </span>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Movie;
