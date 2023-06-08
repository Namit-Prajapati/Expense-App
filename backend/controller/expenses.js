const User = require("../models/user");

exports.getExpenses = async (req, res, next) => {
  const userId = req.query.userId;
  const user = await User.findById(userId);
  if (user.expenses.length === 0) {
    return res.status(200).json({ message: "no expenses" });
  }
  const expenses = [...user.expenses];
  res.status(200).json({ message: "expenses fetched", expenses: expenses });
};

exports.addExpense = async (req, res, next) => {
  const expense = {
    title: req.body.title,
    amount: req.body.amount,
    date: req.body.date,
  };
  const userId = req.body.userId;
  const user = await User.findById(userId);
  const newExpenses = [...user.expenses, expense];
  user.expenses = newExpenses;
  await user.save();
  const added = await user.expenses.find((expense) => expense.title === req.body.title);
  res.status(201).json({ message: "expense added", expense: added });
};
