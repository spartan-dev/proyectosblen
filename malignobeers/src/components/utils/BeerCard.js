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

const BeerCard = ({ title, description, linktitle, link, image, id }) => {
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
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={link ? link : `/detail/${id}`}>
          <Button size="small" color="primary">
            {linktitle}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default BeerCard;