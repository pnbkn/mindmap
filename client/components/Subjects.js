import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store, { createSubject, createTree, getSubjects } from "../store";
// import { link } from "fs";

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  async componentDidMount() {
    await store.dispatch(getSubjects());
  }

  async create(e) {
    e.preventDefault();
    await this.props.postSubject(this.state);
  }

  render() {
    const { name } = this.state;
    console.log("subjects", this.props.subjects);
    return (
      <div className="container">
        <form onSubmit={e => this.create(e)}>
          <input
            name="name"
            value={name}
            onChange={ev =>
              this.setState({ [ev.target.name]: ev.target.value })
            }
          />
          <button type="submit" className="btn btn-primary">
            Add Subject
          </button>
        </form>
        <br />
        <br />
        <div className="container">
          <ul className="list-group">
            {this.props.subjects.map(subject => (
              <Link key={subject.id} to={`/subjects/${subject.id}`}>
                <li key={subject.id} className="list-group-item">
                  {subject.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subjects: state.subjects
});
const mapDispatchToProps = dispatch => {
  return {
    postSubject: _subject => dispatch(createSubject(_subject)),
    getSubjects: () => dispatch(getSubjects())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
