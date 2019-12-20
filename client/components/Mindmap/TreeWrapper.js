import React, { Component } from "react";
import MindMap from "./Mindmap";
import { connect } from "react-redux";
import store, { getTrees, getNodes } from "../../store/";

class TreeWrapper extends Component {
  async componentDidMount() {
    store.dispatch(getTrees());
    store.dispatch(getNodes());
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
  nodes: state.nodes,
  trees: state.trees
});
const mapDispatchToProps = dispatch => {
  return {
    getTrees: () => dispatch(getTrees()),
    getNodes: () => dispatch(getNodes())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TreeWrapper);
