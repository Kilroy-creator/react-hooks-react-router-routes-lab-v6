import React from "react";
import NavBar from "../components/NavBar";
import db from "../db.json";
const directors = db.directors;
function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
