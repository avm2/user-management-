const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const User = require("../models/User");
const mailer = require("../config/mail");
const redis = require("../config/redis");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const token = crypto.randomBytes(32).toString("hex");

  await User.create({
    name,
    email,
    password: hash,
    profileImage: req.file?.path,
    verificationToken: token,
  });

  const link = `${process.env.FRONTEND_URL}/verify/${token}`;
  await mailer.sendMail({
    to: email,
    subject: "Verify Email",
    html: `<a href="${link}">Verify Email</a>`,
  });

  res.json({ message: "Check email for verification link" });
};

exports.verifyEmail = async (req, res) => {
  const user = await User.findOne({
    where: { verificationToken: req.params.token },
  });

  if (!user) return res.status(400).json({ message: "Invalid token" });

  user.isEmailVerified = true;
  user.verificationToken = null;
  await user.save();

  res.json({ message: "Email verified" });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user || !user.isEmailVerified)
    return res.status(400).json({ message: "Verify email first" });

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const access = generateAccessToken(user);
  const refresh = generateRefreshToken(user);

  await redis.set(user.id, refresh, "EX", 604800);

  res.json({ access, refresh });
};

exports.forgotPassword = async (req, res) => {
  const token = crypto.randomBytes(32).toString("hex");
  await redis.set(`reset-${req.body.email}`, token, "EX", 900);

  const link = `${process.env.FRONTEND_URL}/reset/${token}`;
  await mailer.sendMail({
    to: req.body.email,
    subject: "Reset Password",
    html: `<a href="${link}">Reset Password</a>`,
  });

  res.json({ message: "Reset link sent" });
};

exports.resetPassword = async (req, res) => {
  const emailToken = await redis.get(`reset-${req.body.email}`);
  if (emailToken !== req.params.token)
    return res.status(400).json({ message: "Invalid token" });

  const user = await User.findOne({ where: { email: req.body.email } });
  user.password = await bcrypt.hash(req.body.password, 10);
  await user.save();

  res.json({ message: "Password updated" });
};
