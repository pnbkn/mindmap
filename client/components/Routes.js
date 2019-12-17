import React, { Component } from "react";
import { withRouter, Switch, Route, HashRouter } from "react-router-dom";
import { Home } from "./Home/Home";
import Chat from "./Chat/Chat";
import { Login } from "./Home/Login";
import { Register } from "./Home/Register";
import Subjects from "./Subjects";

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/subjects/:id" component={Chat} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/subjects" component={Subjects} />
        </Switch>
      </HashRouter>
    );
  }
}
// export default withRouter(Routes);
export default Routes;
