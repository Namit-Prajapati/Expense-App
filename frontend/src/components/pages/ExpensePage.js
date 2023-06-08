import React, { useEffect, useState } from "react";

import Expenses from "../Expenses/Expenses";
//import ExpenseDemo from "./components/ExpenseDemo";
import NewExpense from "../NewExpense/NewExpense";

const demoExpenses = [
  {
    _id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { _id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    _id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    _id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export const ExpensePage = () => {
  const [expenses, setExpenses] = useState(demoExpenses);
  const [years, setYears] = useState([]);

  const yearsHandler = (expenses) => {
    const yearSet = new Set();
    expenses.forEach((expense) => {
      yearSet.add(expense.date.getFullYear());
    });
    setYears(Array.from(yearSet));
    console.log(years);
  };

  useEffect(() => {
    fetch("http://localhost:8001/expenses?userId=6480916097a1368effc892ec")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.expenses.map((expense) => {
          const date = expense.date.split("-");
          const newDate = new Date(+date[0], +date[1] - 1, +date[2]);
          return { ...expense, date: newDate };
        });
      })
      .then((expen) => {
        setExpenses((prevExpenses) => {
          return [...expen, ...prevExpenses];
        });
      });
  }, []);

  useEffect(() => {
    yearsHandler(expenses);
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} years={years} />
      {/* <ExpenseDemo expensedemo={expense[0]}/>
    <ExpenseDemo expensedemo={expense[1]}/>
    <ExpenseDemo expensedemo={expense[2]}/>
    <ExpenseDemo expensedemo={expense[3]}/> */}
    </div>
  );
};
