import React from "react";
import { Route, Switch } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={IndexPage} />
      <Route path='*' component={NotFoundPage} />
    </Switch>
  );
}
