import React from "react"
import { nanoid } from "nanoid"

export default function ExpenseForm(props) {
    const { handleNewExpense } = props
    const [formData, setFormData] = React.useState({
        title: "",
        amount: "",
        date: "",
        id: nanoid()
    })

    function handleChange(event) {
        setFormData(prevData => {
            return [event.target.name] === "date" ? 
                       
            {
                ...prevData,
                [event.target.name]: new Date([event.target.value])
            }
            :
            {
                ...prevData,
                [event.target.name]: [event.target.value]
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleNewExpense(formData)
        setFormData({
            title: "",
            amount: "",
            date: ""
        })
    }
    return (
        <div className="form--container">
            <form className="form">
                <div className="form--section title">
                    <label htmlFor="title">Title</label>
                    <input
                        className="form--title"
                        type="text"
                        name="title"
                        placeholder="random expense"
                        value={formData.title}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="form--section amount">
                    <label htmlFor="amount">Amount</label>
                    <input
                        className="form--amount"
                        type="number" min="0.01" step="0.01"
                        name="amount"
                        placeholder="value"
                        value={formData.amount}
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="form--section date">
                    <label htmlFor="date">Date</label>
                    <input
                        className="form--date"
                        type="date"
                        name="date"
                        placeholder="random expense"
                        value={formData.date}
                        onChange={handleChange}
                    ></input>
                </div>
                <button
                    type="submit"
                    className="addButton"
                    onClick={handleSubmit}
                >Add Expense</button>
            </form>
        </div>
    )
}