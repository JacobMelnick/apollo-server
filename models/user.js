const sequelize = require("../models");
const { DataTypes } = require("@sequelize/core");

const User = sequelize.define("User", {}, {});

User.sync();

module.exports = User;
