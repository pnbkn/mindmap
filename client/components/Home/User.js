import React from "react";
import { connect } from "react-redux";
import { onLogout } from "../../store/index.js";
import { Link } from "react-router-dom";

class _Logout extends React.Component {
  render() {
      return(
        <div className="container">
          <div className="logout">
          <p>Your mind thanks you for mapping it.</p>

          </div>
          <div>
              <button className="onLogout" onClick={ () => this.props.onLogout(this.props.login.user) } >
              <Link to={"/"}>Logout</Link>
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
