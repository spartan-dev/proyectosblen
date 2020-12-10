import React from "react";
//useof react

//componentes
import BeerCard from "./utils/BeerCard";
import Texto from "./utils/Titulos";
const Home = () => {
  return (
    <div>
      <Texto texto={`My Beers`} tamVar="h1" espacio={true} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BeerCard
          nombre="AllBeers"
          descripcion="Consulta todas las chelas y ve las marcas"
          nombre="Vea a todas las chelas"
          link="/allbeers"
        />
        <BeerCard
          nombre="Random Beer"
          descripcion="dale click al boton y recibe una chela random"
          nombre="random beer"
          link="/randombeer"
        />
        <BeerCard
          nombre="One Beer"
          descripcion="crea tu chela"
          nombre="crear una cerveza"
          link="/onebeer"
        />
      </div>
    </div>
  );
};

export default Home;
