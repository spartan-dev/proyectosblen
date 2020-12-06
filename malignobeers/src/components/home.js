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
          title="AllBeers"
          description="Consulta todas las chelas y ve las marcas"
          linktitle="Vea a todas las chelas"
          link="/allbeers"
        />
        <BeerCard
          title="Random Beer"
          description="dale click al boton y recibe una chela random"
          linktitle="random beer"
          link="/randombeer"
        />
        <BeerCard
          title="One Beer"
          description="Dale click y ve por una chela"
          linktitle="una sola chela"
          link="/onebeer"
        />
      </div>
    </div>
  );
};

export default Home;
