import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import Chat from "./Chat/Chat";
import { Login } from "./Home/Login";
import { Logout } from "./Home/User";
import { Register } from "./Home/Register";
import Subjects from "./Subjects";

class Routes extends Component {
  render() {
    console.log("LOGIN", this);
    console.log("LOGIN ROUTEs ", this.props);
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/welcome/:id" component={Subjects} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user" component={Logout} />
        <Route exact path="/subjects" component={Subjects} />
        <Route exact path="/subjects/:id" component={Chat} />
        <Route exact path="/register" component={Register} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
