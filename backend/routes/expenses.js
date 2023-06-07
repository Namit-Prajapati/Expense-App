const express = require("express");
const expensesController = require("../controller/expenses");
const router = express.Router();

router.get('/',expensesController.getExpenses);

router.post('/add',expensesController.addExpense);

module.exports = router;
