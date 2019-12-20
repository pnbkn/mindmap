import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store, {
  createSubject,
  createTree,
  getSubjects,
  getTrees
} from "../store";
import axios from "axios";
// import { link } from "fs";

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subjects: [],
      userId: this.props.match.params.id
    };
  }

  async componentDidMount() {
    const subjects = (
      await axios.get(`/api/welcome/${this.props.match.params.id}`)
    ).data;
    this.setState({ subjects });
  }

  async create(e) {
    e.preventDefault();
    await this.props.postSubject(this.state);
    const subject = this.props.subjects[this.props.subjects.length - 1];
    console.log("subject", subject);
    const tree = this.props.trees.filter(tree => tree.subjectId === subject.id);

    if (!tree.length) {
      await this.props.postTree({
        idea: subject.name,
        subjectId: subject.id
      });
    }
  }

  render() {
    const { name } = this.state;
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
          <button type="submit" className="btn btn-primary" id="add-subject">
            Add Subject
          </button>
        </form>
        <br />
        <br />
        <div className="container">
          <ul className="list-group">
            {this.state.subjects.map(subject => (
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
  subjects: state.subjects,
  trees: state.trees
});
const mapDispatchToProps = dispatch => {
  return {
    postSubject: _subject => dispatch(createSubject(_subject)),
    getSubjects: () => dispatch(getSubjects()),
    getTrees: () => dispatch(getTrees()),
    postTree: _tree => dispatch(createTree(_tree))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Subjects);
