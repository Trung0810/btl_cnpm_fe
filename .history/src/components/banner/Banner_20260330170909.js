import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/original${url}`}
        alt="#"
        className="banner-image"
      />
      <h2 className="banner-title">{title}</h2>
      <ul className="banner-category">
        {category && category.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button
        className="banner-button"
        onClick={() => nevigate(`/movie/${id}`)}
      >
        Watch Now
      </button>
    </div>
  );
};

export default Banner;
