import React from "react";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, overview, poster_path, vote_average }) => {
  const votacion = (vote) => {
    console.log(vote);
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div className="movie">
      <img src={`${IMGPATH}${poster_path}`} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p className={`tag ${votacion(vote_average)}`}>{vote_average}</p>
      </div>
      <div className="overview">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
