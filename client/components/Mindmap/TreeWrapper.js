import React, { Component } from "react";
import MindMap from "./MindMap";

export default class TreeWrapper extends Component {
  async componentDidMount() {
    const nodes = await this.props.nodes.filter(
      node => node.subjectId === this.props.match
    );
    new MindMap(this.refs.mindmap, nodes);
  }
  render() {
    console.log("NODES ", this.nodes);
    console.log("MATCH", this.props);
    return <div ref="mindmap"></div>;
  }
}
