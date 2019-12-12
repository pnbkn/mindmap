const express = require("express");
const app = express();
const db = require("../db/db");
const { Node } = require("../db/models/index");

app.get("/nodes", (req, res, next) => {
  return Node.findAll()
    .then(nodes => res.send(nodes))
    .catch(next);
});
app.post("/nodes", (req, res, next) => {
  console.log("API POST ", req.body);
  return Node.create(req.body)
    .then(node => res.status(201).send(node))
    .catch(next);
});
module.exports = app;
