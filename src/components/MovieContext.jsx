import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$20",
      id: 23124,
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e8/Game_of_Thrones_Season_1.jpg"
    },
    {
      name: "Game of Thrones",
      price: "$15",
      id: 2566124,
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e8/Game_of_Thrones_Season_1.jpg"
    },
    {
      name: "Inception",
      price: "$10",
      id: 23524,
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e8/Game_of_Thrones_Season_1.jpg"
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
