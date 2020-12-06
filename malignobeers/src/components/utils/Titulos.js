import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});
const Titulo = ({ texto, tamVar, espacio }) => {
  //recibe desde variable del 1 al 6
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant={tamVar} component="h2" gutterBottom={espacio}>
        {texto}
      </Typography>
    </div>
  );
};

export default Titulo;
