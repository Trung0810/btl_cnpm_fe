import React from "react";

const ShoesCard = () => {
  return (
    <div className="movie">
      <div className="wrapper">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="#"
          className="movie-image"
        />
      </div>
      <h3 className="movie-title">{title}</h3>
      <div className="box">
        <span>{release_date}</span>
        <span>
          {vote_average.toFixed(2)} <i className="fa fa-star"></i>
        </span>
      </div>
      <button className="movie-button" onClick={() => navigate(`/movie/${id}`)}>
        Watch Now
      </button>
    </div>
  );
};

export default ShoesCard;
