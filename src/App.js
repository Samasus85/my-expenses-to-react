import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
const INIT_DATA = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2022, 7, 14),
	},
]
const App = () => {
	const [expenses, setExpenses] = useState(INIT_DATA)
	const NewExpensesData = (newData) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, newData]
		})
	}
	return (
		<div>
			<NewExpenses newData={NewExpensesData} />
			<Expenses items={expenses} />
		</div>
	)
}
export default App
