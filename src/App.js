import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import AddMovie from "./components/AddMovie";
import { MovieProvider } from "./components/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Nav />
      <AddMovie />
      <MovieList />
    </MovieProvider>
  );
}
export default App;
