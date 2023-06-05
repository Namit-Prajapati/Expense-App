const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.login = (req, res, next) => {};

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const pass = req.body.password;

  const hashedPass = await bcrypt.hash(pass, 12);

  const user = await new User({
    email: email,
    password: hashedPass,
    expenses: [],
  });

  const newUser = await user.save();
  res.status(200).json({ message: "User Added", user: newUser });
};
