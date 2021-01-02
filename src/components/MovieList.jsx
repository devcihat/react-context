import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="container">
      {movies.map(movie => (
        <Movie
          name={movie.name}
          price={movie.price}
          image={movie.image}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieList;
