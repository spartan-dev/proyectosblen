import React from "react";
import { Switch, Route } from "react-router-dom";
//todos los componentes de la app
import Home from "./components/Hero";
import All from "./components/Todos";
import Onlyone from "./components/Unico";
const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/allchars">
      <All />
    </Route>
    <Route exact path="/onlyone">
      <Onlyone />
    </Route>
  </Switch>
);

export default Router;
