const Sequelize = require('sequelize');
const conn = require('./conn');
const syncAndSeed = require('./seed');

//Models
const User = require('./models/User');
const Subject = require('./models/Subject');
const Node = require('./models/Node');

//Associations
Subject.belongsTo(User);
User.hasMany(Subject);
Node.belongsTo(User);
User.hasMany(Node);
Node.belongsTo(Subject);
Subject.hasMany(Node);

module.exports = {
  syncAndSeed,
  conn,
  models: {
    User,
    Subject,
    Node
  }
};