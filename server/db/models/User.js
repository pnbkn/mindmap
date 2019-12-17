const crypto = require("crypto");
const Sequelize = require("sequelize");
// const db = require("../db");
const conn = require("../conn");
const { STRING, UUID, UUIDV4, BOOLEAN } = Sequelize;

const User = conn.define("user", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false
  },
  password: {
    type: STRING,
    allowNull: false
  },
  salt: {
    type: STRING
  }
});

const getRandomString = function(num) {
  return crypto
    .randomBytes(Math.ceil(num / 2))
    .toString("hex")
    .slice(0, num);
};

const sha256 = function(pw, salt) {
  let hash = crypto.createHmac("sha256", salt);
  hash.update(pw);
  let value = hash.digest("hex");
  return value;
};

saltHashPassword = user => {
  if (user.changed("password")) {
    user.salt = getRandomString(10);
    user.password = sha256(user.password, user.salt);
  }
};

User.prototype.correctPassword = function(pwd) {
  return sha256(pwd, this.salt);
};

User.beforeCreate(saltHashPassword);
User.beforeUpdate(saltHashPassword);

module.exports = User;
