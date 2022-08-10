import React from "react"

export default function Expense(props) {
    const { title, amount, date } = props

    const month = date.toLocaleString('default', {month: 'long'})
    return (
        <div className="expense">
            <div className="expense--date--container">
                <h3 className="date--month">{month}</h3>
                <h4 className="date--year">{date.getFullYear()}</h4>
                <h2 className="date--day">{date.getDay()}</h2>
            </div>
            <div className="expense--titleamount--container">
                <h3 className="expense--title">
                    {title}
                </h3>
                <div className="amount--holder">
                    <h2 className="amount">$ {amount}</h2>
                </div>
            </div>
        </div>
    )
}