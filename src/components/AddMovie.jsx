import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const [image, setImage] = useState("");

  const updateName = event => {
    setName(event.target.value);
  };

  const updatePrice = event => {
    setPrice(event.target.value);
  };

  const updateImage = event => {
    setImage(event.target.value);
  };

  const addMovie = event => {
    event.preventDefault();
    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, image: image }
    ]);
  };

  return (
    <div className="container text-center pt-3">
      <form onSubmit={addMovie}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Movie Image
          </label>
          <input
            required
            type="text"
            className="form-control w-100"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            value={image}
            onChange={updateImage}
          />
        </div>
        <div className="  mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Movie Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={updateName}
          />
        </div>
        <div className="  mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Movie Price
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="price"
            value={price}
            onChange={updatePrice}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
