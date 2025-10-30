import React from "react";
import NavBar from "../components/NavBar";
import db from "../db.json";
const actors = db.actors;

function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
