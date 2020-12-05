import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=04c35731a5ee918f014970082a0088b1&page&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>movi unica</div>;
};

export default Movie;
