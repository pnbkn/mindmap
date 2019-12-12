import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className={"nav"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/subject">Subject</NavLink>
      </div>
    );
  }
}

export default Nav;
