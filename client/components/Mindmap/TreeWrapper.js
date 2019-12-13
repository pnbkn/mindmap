import React, { Component } from "react";
import MindMap from "./MindMap";

export default class TreeWrapper extends Component {
  componentDidMount() {
    new MindMap(this.refs.mindmap, this.props.nodes);
  }
  render() {
    return <div ref="mindmap"></div>;
  }
}
