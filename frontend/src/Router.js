import React from "react";
import { Route, Switch } from "react-router";
import { Home, Login, SignUp, TopPage, GuuVn } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/guu" component={GuuVn} />
      {/* <Route exact path="/top" component={TopPage} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="(/)?" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      {/* <Route path="/posts/:id" component={Post} /> */}
    </Switch>
  );
};

export default Router;
