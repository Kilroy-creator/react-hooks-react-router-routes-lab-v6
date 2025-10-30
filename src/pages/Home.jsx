import React from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import data from "../db.json";

// extract movies from db.json
const movies = data.movies.map((movie) => ({
  id: movie.id,
  title: movie.title,
}));

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default Home;
