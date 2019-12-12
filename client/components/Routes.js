import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import Chat from "./Chat/Chat";
import { Login } from "./Home/Login";
import { Register } from "./Home/Register";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/subject" component={Chat} />
        <Route exact path="/register" component={Register} />
      </Switch>
    );
  }
}

export default Routes;
