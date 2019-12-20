import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../store/index.js";
import { Link } from "react-router-dom";

class _Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  // onSubmit(ev) {
  //   ev.preventDefault();
  //   try {
  //     this.props.createUser({ ...this.state });
  //     const id = this.props.login.user.id;
  //     this.props.history.push(`/welcome/${id}`);
  //   } catch (er) {
  //     console.log(er);
  //   }
  // }

  onSubmit = async e => {
    e.preventDefault();
    await this.props.createUser(this.state);
    if (!this.props.login.user.id) {
      return "error message";
    } else {
      const id = this.props.login.user.id;
      this.props.history.push(`/welcome/${id}`);
    }
  };

  render() {
    const { name, email, password } = this.state;
    const { onChange, onSubmit } = this;

    return (
      <div className="register">
        <form id="register" onSubmit={onSubmit}>
          <div>
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="enter your name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="enter email address"
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
              placeholder="choose a password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <button className="onRegister">Register</button>
          <p>
            Already have an account? Login <Link to={"/login"}>here</Link>.
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ login }) => ({ login });

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
});

const Register = connect(mapStateToProps, mapDispatchToProps)(_Register);

export { Register };
