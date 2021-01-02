import React from "react";

const Movie = ({ name, price, image }) => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-xs-4">
          <div class="card mb-3 text-center">
            <div class="card-body">
              <img className="img-fluid mb-3" src={image} />
              <h5 class="card-title">{name}</h5>
              <p class="card-text">{price}</p>
              <div className="mx-auto">
                <a href="#" class="btn btn-success mx-1">
                  Hemen İzle
                </a>
                <a href="#" class="btn btn-secondary">
                  İndir
                </a>
              </div>
            </div>
            <div className="mx-auto">
              <i style={{ color: "yellow" }} className="fas fa-star" />
              <i style={{ color: "yellow" }} class="fas fa-star" />
              <i style={{ color: "yellow" }} class="fas fa-star" />
              <i style={{ color: "yellow" }} class="fas fa-star" />
              <i style={{ color: "yellow" }} class="fas fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
