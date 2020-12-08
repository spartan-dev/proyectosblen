import React from "react";
import dataProyects from "../dataProyects";
import BeerCard from "./utils/BeerCard";
const OneBeer = () => {
  console.log(dataProyects);

  return (
    <div>
      <h1>HOLA CERVEZA UNICA</h1>
      {dataProyects.map((proyecto) => (
        <BeerCard title={proyecto.titulo} description={proyecto.description} />
      ))}
    </div>
  );
};

export default OneBeer;
