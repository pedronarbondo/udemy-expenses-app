import React from "react"
import Expense from "./Expense"

export default function Main(props) {

    const { expenses } = props

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
        <div className="expenseContainer">
            {mappedExpenses}
        </div>
    )

}