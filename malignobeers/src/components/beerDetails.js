import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Texto from "./utils/Titulos";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Checkbox,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const DetailBeer = () => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
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
  const handleDelete = async () => {
    console.log("hola delete", params.id);
    try {
      await fetch(`http://localhost:4200/beers/${params.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify({ id: params.id }),
      });
    } catch (error) {
      throw new Error("Algo ha salido mal tio!!!! 💀");
    }
  };
  const handleEdit = () => {};
  const handleChange = () => {};
  return (
    <div classes={classes}>
      <Texto texto="Detalles" tamVar="h1" espacio={true}></Texto>
      <Texto texto={`Nombre: ${nombre}`} tamVar={"h4"} espacio={true} />
      <div className="botonera">
        <Button
          onClick={() => setEditing(!editing)}
          variant="contained"
          color="primary"
        >
          editar
        </Button>
        <Button onClick={handleDelete} variant="contained" color="secondary">
          borrar
        </Button>
      </div>
      {editing ? (
        <div>
          Hora de editar motherrfuckers
          <form
            id="beer-form"
            className={classes.form}
            noValidate
            onSubmit={handleEdit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  value={nombre}
                  name="nombre"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  value={tipo}
                  fullWidth
                  autoFocus
                  id="lastName"
                  label="Tipo"
                  name="tipo"
                  autoFocus
                  autoComplete="lname"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  autoFocus
                  value={mezcla}
                  id="email"
                  label="mezcla"
                  name="mezcla"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  autoFocus
                  value={maridaje}
                  name="maridaje"
                  label="Maridaje"
                  id="password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  autoFocus
                  value={descripcion}
                  name="descripcion"
                  label="Descripcion"
                  id="descripcion"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={image}
                  name="image"
                  autoFocus
                  label="Imagen"
                  id="image"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={probada}
                      checked={probada}
                      color="primary"
                    />
                  }
                  onChange={handleChange}
                  name="probada"
                  label="Ya la has probado"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Enviar beer
            </Button>
          </form>
        </div>
      ) : (
        <div className="intro">
          <div className="ficha-tecnica">
            <div className="maridaje">
              <Texto texto="maridaje" tamVar="h5" />
              <Texto texto={maridaje} tamVar="body1" />
            </div>
            <div className="maridaje">
              <Texto texto="Tips de cocinado" tamVar="h5" />
              <Texto texto={mezcla} tamVar="body1" />
            </div>
            <div className="maridaje">
              <Texto texto="Tipo" tamVar="h5" />
              <Texto texto={tipo} tamVar="body1" />
            </div>
            <div className="maridaje">
              <Texto texto="Descripcion" tamVar="h5" />
              <Texto texto={descripcion} tamVar="body2" espacio={true} />
            </div>
            <div className="maridaje">
              <Texto texto="Ya la has probado?" tamVar="h5" />
              <Texto
                texto={probada ? "Ya la probe" : "No la he probado"}
                tamVar="body2"
                espacio={true}
              />
            </div>
          </div>

          <div className="imagen-tecnica">
            <img src={image} alt={nombre} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailBeer;
