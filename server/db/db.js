const Sequelize = require("sequelize");
const conn = require("./conn");
const Node = require("./models/Node");

const syncAndSeed = require("./syncandseed");

module.exports = {
  syncAndSeed,
  conn,
  models: {
    Node
  }
};
