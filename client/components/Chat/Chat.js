import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import socket from "../socket";

class Chat extends Component {
  constructor() {
    super();
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
        // this.props.getMessages();
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
    // await this.props.postMessage(this.state.body);
    //sends the body to the socket event emitter
    console.log("SUBMIT ", this.state.body);
    socket.emit(this.state.room, { body: this.state.body });
    this.setState({ body: "" });
  };
  render() {
    console.log("PROPS ", this.props);
    return (
      <div className={"chat"}>
        <ul className={"messages"}>{/* <li>{this.state.body}</li> */}</ul>
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

export default Chat;
