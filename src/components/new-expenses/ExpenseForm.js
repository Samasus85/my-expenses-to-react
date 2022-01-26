import { useState } from 'react'                // импорт usestate 
import './ExpenseForm.css'                      // импорт стилей

const ExpenseForm = (props) => {                // компонент  к-й получает данные с NewExpenses
    const [title, setTitle] = useState('');     // состояние инпут 
    const [amount, setAmount] = useState('');   // состояние инпут
    const [date, setDate] = useState('');       //состояние инпут
    const inputChangeHandler = (event) => {     // ф-я обработчик к-я после проверки обнавляет состояния каждого значении из инпутов по условиям
        const currentInput = event.target.name; // переменная в к-ую попадают и хранятся значения из инпутов
        if (currentInput === 'title') {         // условия сравнения       
            setTitle(event.target.value)        // полученные значения из input при условии true
        } else if (currentInput === 'amount') {  // условия сравнения
            setAmount(event.target.value)        // полученные значения из input при условии true
        } else if (currentInput === 'date') {    // условия сравнения
            setDate(event.target.value)          // полученные значения из input при условии true
        }
    }
    const submitHandler = (event) => {            // функция обработчик формы к-ая выполняется при клике на кнопку Add Expense 
        event.preventDefault()                    // при нажатии на кнопку останавливает попадание на верхнюю главную страницу (т.е.перезагрузку)
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };
        props.onSaveExpenseData(expenseData)

    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input name='title' type="text" value={title} onChange={inputChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input name='amount' type="number" min="0.1" step="1" value={amount} onChange={inputChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input name='date' type="date" min="2022-01-01" value={date} onChange={inputChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;