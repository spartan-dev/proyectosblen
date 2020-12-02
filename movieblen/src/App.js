import React,{useState,useEffect} from 'react'
import './App.css';
import Movie from './components/movies'
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [movies,setMovies] =useState()
  useEffect(()=>{
    async function call (){
      const peliscall = await fetch(APIURL)
      //destruccturacion
      const {results} = await peliscall.json()
      setMovies(results) //movies = results por el set del state
    }
    call()
  },[])
  console.log(movies.length,"estas son las pelis")
  return (
    <>
       <div className="search">
         <input type="text/search" />
       </div>
        <div className="movie-container">
            {movies.map((movie,idx)=>(
            <Movie key={idx} {...movie} />)
            )}
        </div>
    
    </>
  );
}

export default App;
