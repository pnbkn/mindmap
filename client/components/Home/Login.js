import React from "react";
import { connect } from "react-redux";
import { onLogin } from "../../store/index.js";
import { Link } from "react-router-dom";
import history from "../../history";

class _Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    try {
      this.props.onLogin(this.state);
      // history.push("/subjects");
    } catch (er) {
      console.log(er);
    }
  }
  render() {
    const { email, password } = this.state;
    const { onSubmit } = this;
    const { onChange } = this;
    return (
      <div className="login">
        <form onSubmit={onSubmit}>
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
          <button className="onLogin" type="submit">
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
