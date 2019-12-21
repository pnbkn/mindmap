import React from "react";
import { connect } from "react-redux";
import { onLogout } from "../../store/index.js";
import { Link } from "react-router-dom";

class _Logout extends React.Component {
  render() {
      return(
        <div className="login">
        <p>Hello! Welcome to mindmap!</p>
          <div>
            <button className="onLogin" onClick={ () => this.props.onLogout(this.props.login.user) } >
            <Link to={"/"}>Logout</Link>.
            </button>
          </div>
        </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: user => dispatch(onLogout(user))
  };
};

const Logout = connect(null, mapDispatchToProps)(_Logout);

export { Logout };
