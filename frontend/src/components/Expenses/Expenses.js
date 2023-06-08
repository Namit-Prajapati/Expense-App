// import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [expenseFilter, setExpensesFilter] = useState("All");

  const fList = (item) => {
    if (expenseFilter === "All") {
      return 1;
    } else {
      return item.date.getFullYear().toString() === expenseFilter;
    }
  };

  const filteredList = props.items.filter(fList);

  const saveChangedFilter = (changedFilter) => {
    setExpensesFilter(changedFilter);
    console.log(changedFilter);
    console.log(expenseFilter);
  };

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          years={props.years}
          selected={expenseFilter}
          onChangeFilter={saveChangedFilter}
        />
        <ExpensesChart expenses={filteredList} />
        <ExpensesList items={filteredList} />
      </div>
    </div>
  );
};

export default Expenses;
