import React, { Component } from "react";
import {
  withRouter,
  Switch,
  Route,
  Router,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import { Home } from "./Home/Home";
import Chat from "./Chat/Chat";
import { Login } from "./Home/Login";
import { Register } from "./Home/Register";
import Subjects from "./Subjects";
import store, { attemptSessionLogin } from "../store";

class Routes extends Component {
  async componentDidMount() {
    store.dispatch(attemptSessionLogin());
  }

  render() {
    console.log("LOGIN ROUTEs ", this.props);
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/subjects" component={Subjects} />
        <Route exact path="/subjects/:id" component={Chat} />
        <Route exact path="/register" component={Register} />
      </Switch>
    );
  }
}
// export default withRouter(Routes);
export default Routes;
