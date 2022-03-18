const { DataTypes } = require("@sequelize/core");
const sequelize = require("../models");

const Links = sequelize.define(
  "Links",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {}
);

Links.sync();

module.exports = Links;
