const Sequelize = require("sequelize");
const db = require("../db");
const conn = require("../conn");

const { UUID, UUIDV4, TEXT } = Sequelize;

const id = {
  type: UUID,
  defaultValue: UUIDV4,
  primaryKey: true
};

const Node = conn.define("node", {
  id: id,
  body: {
    type: TEXT
  }
});

module.exports = Node;
