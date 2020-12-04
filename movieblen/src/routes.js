import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
const Routes = () => {
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
  </Switch>;
};

export default Routes;
