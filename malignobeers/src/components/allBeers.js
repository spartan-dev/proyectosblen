import React, { useState, useEffect } from "react";
//compos
import Textos from "./utils/Titulos";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import BeerCard from "./utils/BeerCard";
const AllBeers = () => {
  const [beers, setBeers] = useState();

  useEffect(() => {
    //llama a la funcion en cuento garga el componente
    getBeers();
  }, []);
  const getBeers = async () => {
    const call = await fetch("https://api.punkapi.com/v2/beers ");
    const data = await call.json();
    console.log(data);
    setBeers(data);
  };
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
          {beers === undefined ? (
            <div>Loading...</div>
          ) : (
            beers.map((beer, idx) => (
              <BeerCard
                key={idx}
                title={beer.name}
                description={beer.description}
                linktitle={beer.first_brewed}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBeers;
