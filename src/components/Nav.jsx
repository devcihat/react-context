import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="text-center  ">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ms-4">Dev Cihat</a>
          <p className="text-white pt-3">List of Movies: {movies.length}</p>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
