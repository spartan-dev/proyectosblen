import React from "react";
//instancias
import { Link } from "react-router-dom";
//componentes
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Link>

          <Link style={{ color: "white" }} to="/allbeers">
            <Button color="inherit">
              <Typography variant="h6" className={classes.title}>
                AllBeers
              </Typography>
            </Button>
          </Link>
          <Link style={{ color: "white" }} to="/randombeer">
            <Button color="inherit">
              <Typography variant="h6" className={classes.title}>
                Random
              </Typography>
            </Button>
          </Link>
          <Link style={{ color: "white" }} to="/onebeer">
            <Button color="inherit">
              <Typography variant="h6" className={classes.title}>
                One Beer
              </Typography>
            </Button>
          </Link>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=yzcEG_JoVuo"
            style={{ color: "white" }}
            to="/allbeers"
          >
            <Button color="inherit">
              <Typography variant="h6" className={classes.title}>
                Rolota de chela #ebrios
              </Typography>
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
