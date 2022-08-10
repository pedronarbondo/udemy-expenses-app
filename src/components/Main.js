import React from "react"
import Expense from "./Expense"
import ExpenseForm from "./ExpenseForm"

export default function Main(props) {

    const { expenses, handleNewExpense } = props

    const mappedExpenses =
        expenses.map(expense => {
            return (
                <Expense
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )
        })

    return (
        <div className="main">
            <div className="form--div">
                <ExpenseForm handleNewExpense={handleNewExpense}/>                
            </div>
            <div className="expenseContainer">
                {mappedExpenses}
            </div>
        </div>
    )

}