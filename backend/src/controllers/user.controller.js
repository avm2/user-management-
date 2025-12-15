const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const { page = 1, search = "" } = req.query;
  const limit = 5;
  const offset = (page - 1) * limit;

  const users = await User.findAndCountAll({
    where: { name: { [require("sequelize").Op.like]: `%${search}%` } },
    limit,
    offset,
  });

  res.json(users);
};

exports.getProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id);
  res.json(user);
};
