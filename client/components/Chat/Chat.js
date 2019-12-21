import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as d3 from "d3";
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
      subjectId: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    store.dispatch(getSubjects());
    store.dispatch(getTrees());
    await this.props.getMessages();
    await this.props.getTrees();

    socket.on(this.state.room, msg => {
      if (msg) {
        this.props.getMessages();
      }
    });
  }
  async componentDidUpdate() {
    console.log("UPDATED");
    this.renderTree;
    // store.dispatch(getTrees());
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
    socket.emit(this.state.room, { body: this.state.body });

    this.setState({ room: "APP", body: "", subjectId: "" });
  };

  ideaSelected = ev => {
    if (!ev.target.style.border) {
      ev.target.style.border = "2px solid white";
    } else {
      ev.target.style.border = "";
    }
  };

  renderTree = ev => {
    console.log("RENDER TREE", ev);
    if (this.props.trees.length == 0) {
      return "No data yet";
    } else {
      return (
        <TreeWrapper
          trees={this.props.trees}
          match={this.props.match.params.id}
        />
      );
    }
  };

  render() {
    let ideaObj = {};

    const { postTree } = this.props;
    setTimeout(() => {
      const chatIdea = document.querySelector(".messages");
      ideaObj.subjectId = this.props.match.params.id;
      chatIdea.addEventListener("click", e => {
        if (e.target.tagName === "LI") {
          console.log("CLICKED ON CHAT LIST");
          const ideaChat = e.target.innerHTML;
          ideaObj.idea = ideaChat;
        }
      });
      d3.selectAll("text").on("click", function(d) {
        d3.select(this);

        ideaObj.parentId = d.data.id;
        postTree(ideaObj);
      });
    }, 0);

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={"chat"}>
              <h3>
                {this.props.subjects.map(subject =>
                  subject.id === this.props.match.params.id ? subject.name : ""
                )}
              </h3>
              <ul className={"messages"}>
                {this.props.nodes.map(node =>
                  this.props.match.params.id === node.subjectId ? (
                    <li
                      className={"chatBubble"}
                      key={node.id}
                      onClick={this.ideaSelected}
                    >
                      {node.body}
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
              <form method="post" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    name="body"
                    type="text"
                    value={this.state.body}
                    autoComplete="off"
                    placeholder="Post Your Idea Here"
                    onChange={this.handleChange}
                  />
                </div>
                <div id='send'>
                  <button type="submit" className="btn-primary" id="chat-send">
                    Send
                  </button>
                </div>
              </form>
              <br />
            </div>
          </div>
          <div className="col" onClick={this.renderTree}>
            {this.renderTree()}
          </div>
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
