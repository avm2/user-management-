const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  profileImage: DataTypes.STRING,
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  isEmailVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
  googleId: DataTypes.STRING,
});

module.exports = User;
