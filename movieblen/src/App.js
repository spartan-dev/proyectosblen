import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/movies";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [movies, setMovies] = useState(undefined);
  const [searchTerm, setSearch] = useState();
  useEffect(() => {
    async function call() {
      const peliscall = await fetch(APIURL);
      //destruccturacion
      const { results } = await peliscall.json();
      setMovies(results); //movies = results por el set del state
    }
    call();
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value); // con este hook llenare mi cajon de variable
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // no actua de manera natural
    if (searchTerm) {
      fetch(SEARCHAPI + searchTerm) // esto se llama interpolacion´${SEARCHAPI}${searchTerm}
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "la respuesta");
          //que vamos a hacer ??
          setMovies(data.results);
        })
        .catch((error) => console.log(error));
      setSearch("");
    }
  };
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="search"
            type="text/search"
            //value={searchTerm}
          />
        </form>
      </header>

      <div className="movie-container">
        {movies ? (
          movies.map((movie, idx) => <Movie key={idx} {...movie} />)
        ) : (
          <div>Loadding....</div>
        )}
      </div>
    </>
  );
}

export default App;
