import React from "react";

const Movie = ({ name, price, image }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-4">
          <div className="card mb-3 text-center">
            <div className="card-body">
              <img className="img-fluid mb-3" src={image} />
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{price}</p>
              <div className="mx-auto">
                <a href="#" className="btn btn-success mx-1">
                  Hemen İzle
                </a>
                <a href="#" className="btn btn-secondary">
                  İndir
                </a>
              </div>
            </div>
            <div className="mx-auto">
              <i style={{ color: "yellow" }} className="fas fa-star" />
              <i style={{ color: "yellow" }} className="fas fa-star" />
              <i style={{ color: "yellow" }} className="fas fa-star" />
              <i style={{ color: "yellow" }} className="fas fa-star" />
              <i style={{ color: "yellow" }} className="fas fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
