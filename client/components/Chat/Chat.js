import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store, {
  createNode,
  getNodes,
  getSubjects,
  getTrees,
  createTree
} from "../../store/";
import socketIOClient from "socket.io-client";
import socket from "../socket";
import TreeWrapper from "../Mindmap/TreeWrapper";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: "APP",
      body: "",
      subjectId: "",
      active: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    store.dispatch(getSubjects());
    store.dispatch(getTrees());
    await this.props.getMessages();

    socket.on(this.state.room, msg => {
      if (msg) {
        this.props.getMessages();
      }
    });
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }
  handleSubmit = async ev => {
    ev.preventDefault();
    //creates msg in db
    const node = {
      body: this.state.body,
      subjectId: this.props.match.params.id
    };
    await this.props.postNode(node);
    //sends the body to the socket event emitter
    console.log("SUBMIT ", this.state.body);
    socket.emit(this.state.room, { body: this.state.body });

    this.setState({ room: "APP", body: "", subjectId: "" });
  };

  renderTree() {
    if (this.props.trees.length == 0) {
      return "No data yet";
    } else {
      console.log("nodesTree", this.props.trees);
      return (
        <TreeWrapper
          trees={this.props.trees}
          match={this.props.match.params.id}
        />
      );
    }
  }

  nodeSelect = ev => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    const bgColor = ev.target.style.backgroundColor;
    if (!currentState) {
      ev.target.style.backgroundColor = "#000";
    } else {
      ev.target.style.backgroundColor = "#999";
    }

    console.log("CHANGED", ev.target);
  };

  render() {
    const subject = this.props.subjects.filter(
      subject => subject.id === this.props.match.params.id
    );
    const tree = this.props.trees.filter(
      tree => tree.subjectId === subject[0].id
    );
    if (!tree.length) {
      // this.props.postTree({ idea: subject[0].name, subjectId: subject[0].id });
    }
    console.log("PROPS Nodes ", this.props.nodes);
    console.log("PROPS SUBJECTS ", this.props);
    console.log("foundChat", tree);
    console.log("subjectChat", subject);
    const treeList = document.querySelector("g");

    if (treeList) {
      console.log("textTree", treeList.children[1].children);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={"chat"}>
              <h2>
                {this.props.subjects.map(subject =>
                  subject.id === this.props.match.params.id ? subject.name : ""
                )}
              </h2>
              <ul className={"messages"}>
                {this.props.nodes.map(node =>
                  this.props.match.params.id === node.subjectId ? (
                    <li
                      className={"chatBubble"}
                      key={node.id}
                      onClick={this.nodeSelect}
                    >
                      {node.body}
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
              <br />
              <br />
              <form method="post" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    name="body"
                    type="text"
                    value={this.state.body}
                    autoComplete="off"
                    className="form-control"
                    placeholder="Post Your Idea Here"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <button type="submit" className="btn-primary">
                    Send
                  </button>
                </div>
              </form>
              <br />
            </div>
          </div>
          <div className="col">{this.renderTree()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  nodes: state.nodes,
  subjects: state.subjects,
  trees: state.trees
});
const mapDispatchToProps = dispatch => {
  return {
    postNode: _node => dispatch(createNode(_node)),
    getMessages: () => dispatch(getNodes()),
    getSubjects: () => dispatch(getSubjects()),
    getTrees: () => dispatch(getTrees()),
    postTree: _tree => dispatch(createTree(_tree))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
