import React from "react";
import { Link } from "react-router-dom";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, overview, poster_path, vote_average, id }) => {
  const votacion = (vote) => {
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
        <div>
          <Link to={`/movie/${id}`}>
            <h3>{title}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
