const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const pass = req.body.password;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  const isEqual = await bcrypt.compare(pass, user.password);
  if (!isEqual) {
    return res.status(402).json({ message: "wrong credentials" });
  }
  res.status(200).json({ message: "login successful!", user: user });
};

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const pass = req.body.password;

  const hashedPass = await bcrypt.hash(pass, 12);

  let user = await User.findOne({ email: email });
  if (user) {
    return res.status(403).json({ message: "user exists" });
  }

  user = await new User({
    email: email,
    password: hashedPass,
    expenses: [],
  });

  const newUser = await user.save();
  res.status(200).json({ message: "user added", user: newUser });
};
