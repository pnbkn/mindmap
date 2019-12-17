const db = require("./db");
const User = require("./models/User");
const Subject = require("./Subject");
const Node = require("./Node");
const Tree = require("./models/Tree");

module.exports = {
  db,
  models: { User, Node, Subject, Tree }
};
