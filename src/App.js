import { nanoid } from "nanoid";
import React from "react"
import Main from "./components/Main"

const DUMMY_EXPENSES = [
  {
    id: nanoid(),
    title: "Ferry",
    amount: "65,33",
    date: new Date(2022, 8, 1)
  },
  {
    id: nanoid(),
    title: "Hotel",
    amount: "33,45",
    date: new Date(2022, 8, 3)
  },
  {
    id: nanoid(),
    title: "Suplements",
    amount: "50,17",
    date: new Date(2022, 8, 5)
  },

]

function App() {

  const [expenses, setExpenses] = React.useState(DUMMY_EXPENSES)

  function newExpense(expenseData) {
    const newExpense = expenseData
    setExpenses(prevExpenses => {
      return [
        newExpense,
        ...prevExpenses
      ]
    })
  }

  return <Main 
    expenses={expenses}
    handleNewExpense={newExpense}
    />
}

export default App;
