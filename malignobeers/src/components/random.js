import React, { useState, useEffect } from "react";
import Textos from "./utils/Titulos";
import BeerCard from "./utils/BeerCard";
import CssBaseline from "@material-ui/core/CssBaseline";
const RandomBeer = () => {
  const [random, setRandom] = useState();

  useEffect(() => {
    //llama a la funcion en cuento garga el componente
    getRandom();
  }, []);
  const getRandom = async () => {
    const call = await fetch("https://api.punkapi.com/v2/beers/random ");
    const data = await call.json();
    setRandom(data);
  };
  console.log(random);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Textos texto="All Beers for you" tamVar="h1" espacio={true} />
        <Textos
          texto="Una fina seleccion de la api de punk api der chelas para que umo se vuelva mas borracho"
          tamVar="body2"
          espacio={true}
        />
      </div>
      <div>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {random === undefined ? (
            <div>Loading...</div>
          ) : (
            <BeerCard
              title={random[0].name}
              description={random[0].description}
              linktitle={random[0].first_brewed}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
