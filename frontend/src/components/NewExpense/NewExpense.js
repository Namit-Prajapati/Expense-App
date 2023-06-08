import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{

    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            // id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setButtonValue(false);
        // setButtonValue()
        // console.log(expenseData);  
    };

    const [buttonValue,setButtonValue]=useState(false);
    const setCancelValue=()=>{
        setButtonValue(false);
    }
    const changeButtonValue=()=>{
        setButtonValue(true);
    }

    return (
        <div className='new-expense'>
            {!buttonValue&&<button onClick={changeButtonValue}>Add a new Expense</button>}
            {buttonValue&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} buttonValue={setCancelValue} />}
        </div>
    )
};

export default NewExpense;