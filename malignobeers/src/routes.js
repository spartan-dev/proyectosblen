import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import AllBeers from "./components/allBeers";
import OneBeer from "./components/oneBeer";
import RandomBeer from "./components/random";
const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/allbeers">
      <AllBeers />
    </Route>
    <Route exact path="/onebeer">
      <OneBeer />
    </Route>
    <Route exact path="/randombeer">
      <RandomBeer />
    </Route>
  </Switch>
);

export default Router;
