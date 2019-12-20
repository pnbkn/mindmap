const Sequelize = require("sequelize");
const conn = require("./conn");
// const syncAndSeed = require("./syncandseed");
//Models
const User = require("./models/User");
const Subject = require("./models/Subject");
const Node = require("./models/Node");
const Tree = require("./models/Tree");

const syncAndSeed = require("./syncandseed");

//Associations
Subject.belongsTo(User);
User.hasMany(Subject);

Node.belongsTo(User);
User.hasMany(Node);

Node.belongsTo(Subject);
Subject.hasMany(Node);

Subject.hasOne(Tree);

Tree.belongsTo(Tree, { as: "parent" });
Tree.hasMany(Tree, { as: "child", foreignKey: "parentId" });

Tree.belongsTo(Subject);
Subject.hasMany(Tree);

module.exports = {
  syncAndSeed,
  conn,
  models: {
    User,
    Subject,
    Node,
    Tree
  }
};
