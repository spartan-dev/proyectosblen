import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Texto from "./utils/Titulos";
const DetailBeer = () => {
  const [beer, setBeer] = useState({
    nombre: "",
    maridaje: "",
    image: "",
    tipo: "",
    mezcla: "",
    descripcion: "",
    probada: undefined,
  });
  const params = useParams();
  //llamar a la api con el id https://api.punkapi.com/v2/beers/
  const { nombre, maridaje, image, mezcla, probada, tipo, descripcion } = beer;
  console.log(beer);
  useEffect(() => {
    async function oneBeer() {
      const beerCall = await fetch(
        `http://localhost:4200/beers?id=${params.id}`
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
      <Texto texto={`Nombre: ${nombre}`} tamVar={"h4"} espacio={true} />
      <div>
        <Texto texto="maridaje" tamVar="h5" />
        <Texto texto={maridaje} tamVar="body1" />
      </div>
      <img src={image} alt={nombre} />
      <div>
        <Texto texto="Tips de cocinado" tamVar="h5" />
        <Texto texto={mezcla} tamVar="body1" />
      </div>
      <div>
        <Texto texto="Tipo" tamVar="h5" />
        <Texto texto={tipo} tamVar="body1" />
      </div>
      <div>
        <Texto texto={descripcion} tamVar="body2" espacio={true} />
      </div>
      <div>
        <Texto
          texto={probada ? "Ya la probe" : "No la he probado"}
          tamVar="body2"
          espacio={true}
        />
      </div>
    </div>
  );
};

export default DetailBeer;
