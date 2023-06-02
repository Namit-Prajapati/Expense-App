import React, { useState } from "react";


import Expenses from "../Expenses/Expenses";
//import ExpenseDemo from "./components/ExpenseDemo";
import NewExpense from "../NewExpense/NewExpense";

const demoExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export const ExpensePage = () => {
  const [expenses, setExpenses] = useState(demoExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
      {/* <ExpenseDemo expensedemo={expense[0]}/>
    <ExpenseDemo expensedemo={expense[1]}/>
    <ExpenseDemo expensedemo={expense[2]}/>
    <ExpenseDemo expensedemo={expense[3]}/> */}
    </div>
  );
};
