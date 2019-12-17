import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import Chat from "./Chat/Chat";
import { Login } from "./Home/Login";
import { Register } from "./Home/Register";
import Subjects from "./Subjects";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/subjects/:id" component={Chat} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/subjects" component={Subjects} />
      </Switch>
    );
  }
}

export default Routes;
