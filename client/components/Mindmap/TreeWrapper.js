import React, { Component } from "react";
import MindMap from "./Mindmap";
import { connect } from "react-redux";

class TreeWrapper extends Component {
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

const mapStateToProps = state => ({
  trees: state.trees
});
const mapDispatchToProps = dispatch => {
  return {
    getTrees: () => dispatch(getTrees())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TreeWrapper);
