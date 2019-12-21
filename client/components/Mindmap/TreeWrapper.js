import React, { Component, useRef, useEffect } from "react";
import { connect } from "react-redux";
import * as d3 from "d3";
import ReactFauxDOM from "react-faux-dom";

import { createTree } from "../../store/";

const generateTree = ideas => {
  const topParent = ideas.find(idea => idea.parentId === null);
  const tree = { ...topParent };
  tree.children = generateParents(ideas, topParent);
  return tree;
};

const generateParents = (ideas, parent) => {
  return ideas
    .filter(idea => idea.parentId === parent.id)
    .map(idea => {
      idea.children = generateParents(ideas, idea);
      return idea;
    });
};

const drawChart = trees => {
  const table = generateTree(trees);
  const dataStructure = d3.hierarchy(table);
  const treeLayout = d3.tree().size([350, 350]);
  const information = treeLayout(dataStructure);

  const div = new ReactFauxDOM.Element("div");

  const svg = d3
    .select(div)
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .append("g")
    .attr("transform", "translate(30,30)");
  const connections = svg
    .append("g")
    .selectAll("line")
    .data(information.links());
  connections
    .enter()
    .append("line")
    .attr("x1", function(d) {
      return d.source.x;
    })
    .attr("y1", function(d) {
      return d.source.y;
    })
    .attr("x2", function(d) {
      return d.target.x;
    })
    .attr("y2", function(d) {
      return d.target.y;
    });
  const circles = svg
    .append("g")
    .selectAll("circle")
    .data(information.descendants());
  circles
    .enter()
    .append("circle")
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    })
    .attr("r", 5);
  const content = svg
    .append("g")
    .attr("className", "textTree")
    .selectAll("text")
    .data(information.descendants());
  content
    .enter()
    .append("text")
    .text(function(d) {
      return d.data.idea;
    })
    .attr("x", function(d) {
      return d.x - 6;
    })
    .attr("y", function(d) {
      return d.y - 8;
    })
    .attr("id", function(d) {
      return d.data.id;
    });

  return div.toReact();
};

const TreeWrapper = ({ trees, match, ideaObj, postTree }) => {
  useEffect(() => {
    console.log("Yolo");
    d3.selectAll("text").on("click", function() {
      console.log({ d: d3.select(this).id, id: this.id });
      postTree({
        ...ideaObj,
        parentId: this.id
      });
    });
  });

  const treeData = trees.filter(tree => tree.subjectId === match);
  return <div className={"mindmap"}>{drawChart(treeData)}</div>;
};

const mapStateToProps = state => ({
  trees: state.trees
});
const mapDispatchToProps = dispatch => {
  return {
    getTrees: () => dispatch(getTrees()),
    postTree: _tree => dispatch(createTree(_tree))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TreeWrapper);
