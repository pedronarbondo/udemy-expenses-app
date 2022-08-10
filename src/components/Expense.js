import React from "react"

export default function Expense(props) {
    const { title, amount, date } = props

    const month = date.toLocaleString('default', {month: 'long'})
    const year = date.toLocaleString('default', {year: 'numeric'})
    const day = date.toLocaleString('default', {day: 'numeric'})

    return (
        <div className="expense">
            <div className="expense--date--container">
                <h3 className="date--month">{month}</h3>
                <h4 className="date--year">{year}</h4>
                <h2 className="date--day">{day}</h2>
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