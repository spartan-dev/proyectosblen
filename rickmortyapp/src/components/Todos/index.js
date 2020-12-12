import React, { useState, useEffect } from "react";
//traer a los personajes con la api
const APIALL = "https://rickandmortyapi.com/api/character";
const TodosPersonajes = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(APIALL)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
  console.log(characters);
  return (
    <div>
      <h1>Hola soy todos</h1>
    </div>
  );
};

export default TodosPersonajes;
