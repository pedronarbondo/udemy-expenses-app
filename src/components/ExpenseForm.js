import React from "react"

export default function ExpenseForm() {
    const [formData, setFormData] = React.useState({
        title: "",
        amount: "",
        date: ""
    })

    function handleChange(event) {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: [event.target.value]
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
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
                        type="text"
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
                        name="title"
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