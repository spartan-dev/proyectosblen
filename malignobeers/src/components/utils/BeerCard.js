import React from "react";
//react use
import { Link } from "react-router-dom";
//componentes
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "2em",
  },
  media: {
    height: 140,
  },
});

const BeerCard = ({
  nombre,
  descripcion,
  maridaje,
  mezcla,
  probada,
  tipo,
  link,
  image,
  id,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            image
              ? image
              : "https://assets.visitmilwaukee.org/visitmke/media/global/Partner%20Images/Gallery%20Size/VM-ThirdSpaceBrewing-Beers.jpg?ext=.jpg&mode=crop&width=1920&height=1080&scale=both"
          }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nombre ? <span className="span"> Nombre: {nombre}</span> : null}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion ? (
              <span className="span">Descripcion: {descripcion}</span>
            ) : null}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {maridaje ? (
              <span className="span">Con que se come? {maridaje}</span>
            ) : null}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {mezcla ? <span className="span">La mezcla: {mezcla}</span> : null}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tipo ? <span className="span">De que tipo es: {tipo}</span> : null}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {probada ? (
              <span className="span">
                Ya la has probado?{" "}
                {probada ? "si la he probado" : " no la he probado"}
              </span>
            ) : null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={link ? link : `/detail/${id}`}>
        <Button size="large" variant="contained" color="primary">
          Ver Detalles de {nombre}
        </Button>
      </Link>
      <CardActions></CardActions>
    </Card>
  );
};

export default BeerCard;
