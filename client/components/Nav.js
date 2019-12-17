import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className={"nav"}>
        <HashRouter>
          <NavLink to="/">Home</NavLink>
          <NavLink to={`/subjects`}>Subjects</NavLink>
        </HashRouter>
      </div>
    );
  }
}

export default Nav;
