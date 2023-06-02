import ExpenseItem from "./ExpenseItem";

const ExpenseDemo=(props)=>{
    
    return(
        <ExpenseItem
      title={props.expensedemo.title}
      amount={props.expensedemo.amount}
      date={props.expensedemo.date}
      />
    );

}

export default ExpenseDemo;