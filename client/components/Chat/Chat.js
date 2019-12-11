import React, { Component } from "react";
import { connect } from "react-redux";
import { createNode } from "../../store/thunks";
import socketIOClient from "socket.io-client";
import socket from "../socket";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: "APP",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    socket.on(this.state.room, msg => {
      if (msg) {
        this.props.getNodes();
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
    const node = this.state.body;
    await this.props.postNode(node);
    //sends the body to the socket event emitter
    console.log("SUBMIT ", this.state.body);
    socket.emit(this.state.room, { body: this.state.body });

    this.setState({ body: "" });
  };
  render() {
    console.log("PROPS ", this.props);

    return (
      <div className={"chat"}>
        <ul className={"messages"}>
          {/* {this.props.nodes.map(node => (
            <li id={node.id}>{node.name}</li>
          ))} */}
        </ul>
        <form method="post" onSubmit={this.handleSubmit}>
          <input
            name="body"
            type="text"
            value={this.state.body}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subject: state.subjects,
  node: state.nodes
});
const mapDispatchToProps = dispatch => {
  return {
    postNode: node => dispatch(createNode(node)),
    getNodes: node => dispatch(getNodes())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
