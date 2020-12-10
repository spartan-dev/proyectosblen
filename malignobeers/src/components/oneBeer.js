import React, { useState } from "react";
import {
  AppBar,
  colors,
  Avatar,
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  createMuiTheme,
  Box,
  Grid,
  makeStyles,
  Button,
  SvgIcon,
  FormControlLabel,
  Checkbox,
  AutoComplete,
  TextField,
  Link,
} from "@material-ui/core";
import BeerCard from "./utils/BeerCard";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const OneBeer = () => {
  const [form, setForm] = useState({
    nombre: "",
    tipo: "",
    mezcla: "",
    maridaje: "",
    descripcion: "",
    image: "",
    probada: undefined,
  });
  const classes = useStyles();
  //crar funcion que recoje los valores del input
  const handleChange = (e) => {
    const { value, name, checked } = e.target;
    //setea los valores de el form setForm
    //... spread operator (inmutabilidad)
    setForm({ ...form, [name]: value || checked }); //trae moño o sii 💀
    //partre uno dice : traeme lo qe tengas en form y ponlo primero
    //[name]: value ṕor cada name agregale su value  || = or  check
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendBeer = await fetch("http://localhost:4200/beers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log(sendBeer.status);
      if (sendBeer.status === 201) {
        setForm({});
        document.getElementById("beer-form").reset();
      }
    } catch (error) {
      throw new Error("error", error);
    }
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Agrega ua chela
          </Typography>
          <form
            id="beer-form"
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  value={form.name}
                  name="nombre"
                  variant="outlined"
                  required
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
                  required
                  fullWidth
                  id="lastName"
                  label="Tipo"
                  name="tipo"
                  autoComplete="lname"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="mezcla"
                  name="mezcla"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="maridaje"
                  label="Maridaje"
                  id="password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="descripcion"
                  label="Descripcion"
                  id="descripcion"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="image"
                  label="Imagen"
                  id="image"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
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
        <Box mt={5}></Box>
      </Container>
    </div>
  );
};

export default OneBeer;
