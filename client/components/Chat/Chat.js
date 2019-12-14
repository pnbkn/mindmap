import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store, { createNode, getNodes } from "../../store/";
import socketIOClient from "socket.io-client";
import socket from "../socket";
import TreeWrapper from "../Mindmap/TreeWrapper";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: "APP",
      body: "",
      subjectId: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    store.dispatch(getNodes());
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

    this.setState({ room: "App", body: "", subjectId: "" });
  };

  renderTree() {
    if (this.props.nodes.length == 0) {
      return "No data yet";
    } else {
      console.log("nodesTree", this.props.nodes);
      return (
        <TreeWrapper
          nodes={this.props.nodes}
          match={this.props.match.params.id}
        />
      );
    }
  }

  render() {
    console.log("PROPS Nodes ", this.props.nodes);
    console.log("PROPS SUBJECTS ", this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={"chat"}>
              <ul className={"messages"}>
                {this.props.nodes.map(node =>
                  this.props.match.params.id === node.subjectId ? (
                    <Link className={"chatBubble"} key={node.id} to="">
                      <li key={node.id}>{node.body}</li>
                    </Link>
                  ) : (
                    ""
                  )
                )}
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
              </ul>
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
  subject: state.subjects
});
const mapDispatchToProps = dispatch => {
  return {
    postNode: _node => dispatch(createNode(_node)),
    getMessages: () => dispatch(getNodes())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
