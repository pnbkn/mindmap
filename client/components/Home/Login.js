import React from "react";
import { connect } from "react-redux";
import { onLogin } from "../../store/index.js";
import { Link } from "react-router-dom";

class _Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  login = e => {
    e.preventDefault();
    try {
      this.props.onLogin(this.state);
      this.props.history.push("/subjects");
    } catch (er) {
      console.log(er);
    }
  };

  render() {
    const { email, password } = this.state;
    const { login } = this;
    const { onChange } = this;

    return (
      <div className="login">
        <form onSubmit={login}>
          <div>
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="enter your reistered email id"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="onLogin">
            Login
          </button>
          <p>
            Don't have an account? Register <Link to={"/register"}>here</Link>.
          </p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(onLogin(user))
  };
};

const Login = connect(null, mapDispatchToProps)(_Login);

export { Login };
