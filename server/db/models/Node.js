const Sequelize = require("sequelize");
const db = require("../db");

const { STRING, UUID, UUIDV4 } = Sequelize;

const id = {
  type: UUID,
  defaultValue: UUIDV4,
  primaryKey: true
};

const Node = db.define("node", {
  id: id,
  name: {
    type: STRING,
    allowNull: true
  }
});

module.exports = Node;
