import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import store, { getUsers, attemptSessionLogin } from "../store/";

class Nav extends Component {
  async componentDidMount() {
    store.dispatch(getUsers());
    store.dispatch(attemptSessionLogin());
  }
  render() {
    console.log("NAV ", this.props.auth.user);
    return (
      <div className={"nav"}>
        <HashRouter>
          <NavLink to={`/welcome/${this.props.auth.user}`}>Projects</NavLink>
          <NavLink to={"/user"}>Logout</NavLink>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

// export default Nav;
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
