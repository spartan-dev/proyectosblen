import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Texto from "./utils/Titulos";
const DetailBeer = () => {
  const [beer, setBeer] = useState({
    name: "",
    first_brewed: "",
    image_url: "",
    brewer_tips: "",
    description: "",
  });
  const params = useParams();
  //llamar a la api con el id https://api.punkapi.com/v2/beers/
  const { name, first_brewed, image_url, brewer_tips, description } = beer;
  console.log(beer);
  useEffect(() => {
    async function oneBeer() {
      const beerCall = await fetch(
        `https://api.punkapi.com/v2/beers/${params.id}`
      );
      const [data] = await beerCall.json();
      setBeer({
        ...data,
      });
    }
    oneBeer();
  }, []);

  return (
    <div>
      <Texto texto="Detalles" tamVar="h1" espacio={true}></Texto>
      <Texto texto={`Nombre: ${name}`} tamVar={"h4"} espacio={true} />
      <p>{first_brewed}</p>
      <img src={image_url} alt={name} />
      <div>
        <Texto texto="Tips de cocinado" tamVar="h5" />
        <Texto texto={brewer_tips} tamVar="body1" />
      </div>
      <div>
        <Texto texto={description} tamVar="body2" espacio={true} />
      </div>
    </div>
  );
};

export default DetailBeer;
