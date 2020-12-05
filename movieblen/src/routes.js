import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Movie from "./components/movie";
const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/movie/:id" component={Movie} />
  </Switch>
);

export default Routes;
