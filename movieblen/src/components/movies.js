import React from 'react'
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title,overview,poster_path,popularity}) => {
  console.log(title,"dentro de la card de movie")
  return(
        <div className="movie">
          <h1>{title}</h1>
          <img src={`${IMGPATH}${poster_path}`} alt={title}/>
  <p>{overview}</p>
  <p>{popularity}</p>
        </div>
  )
}

export default Movie