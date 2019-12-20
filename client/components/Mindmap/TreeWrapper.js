import React, { Component } from "react";
import MindMap from "./Mindmap";

export default class TreeWrapper extends Component {
  async componentDidMount() {
    const trees = await this.props.trees.filter(
      tree => tree.subjectId === this.props.match
    );
    new MindMap(this.refs.mindmap, trees);
  }
  render() {
    return <div className={"mindmap"} ref="mindmap"></div>;
  }
}
