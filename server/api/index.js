const express = require("express");
const app = express();
const db = require("../db/db");
const { User, Subject, Node } = require("../db/models/index");

app.get("/nodes", (req, res, next) => {
  console.log("GET REQ", req.body);
  return Node.findAll()
    .then(nodes => res.send(nodes))
    .catch(next);
});

app.post("/nodes", (req, res, next) => {
  console.log("POST REQ", req.body);
  // if (req.session.node.isAdmin === true) {
  return Node.create(req.body).then(_node => res.status(201).send(_node));
  // }
});

module.exports = app;
