import './App.css';                                         // импор стилей для App
import React, { useState } from 'react'                     // импорт useState
import Expenses from './components/Expenses/Expenses';      // импорт Expenses
import NewExpenses from './components/new-expenses/NewExpenses'; // импорт   NewExpenses
;

const data = [        //Массив с данными созданный нами, обычно приходит с сервера
  {
    id: 1,            // идентичный ключ 
    title: 'Toilet Paper',      // любые данные в виде обьекта т.е. ключ + значение
    amount: 1.5,
    date: new Date(2021, 7, 14),
  },
  {
    id: 2,
    title: 'Car Insuranse',
    amount: 200,
    date: new Date(2021, 2, 28),
  },
  {
    id: 3,
    title: 'FastFood',
    amount: 2.9,
    date: new Date(2021, 8, 18),
  },
  {
    id: 4,
    title: 'Course',
    amount: 150,
    date: new Date(2021, 9, 1),
  },
  {
    id: 5,
    title: 'Transport',
    amount: 4.7,
    date: new Date(2021, 10, 4),
  },
]

function App() {                    //componentt App
  const [expenses, setExpenses] = useState(data)    // создания useState (деструктуризация)
  const addExpenseDataHendler = (expense) => {      // получение данных с дочернего компонента
    console.log(expense);                           // вывод данных на консоль
    setExpenses((prevState) => {                    // сохранение предыдушее состояние
      return [expense, ...prevState];               // возвращение предыдущ т.е. (старых и новых) обнавленных данных
    });
  }
  return (                                          // JSX
    <div >
      <NewExpenses onAddExpense={addExpenseDataHendler} /> {/* придут данные с ExpenseForm */}
      <Expenses items={expenses} />    {/* использование useState ввиде props  в component Expenses */}
    </div>
  )
}

export default App;                               // Экспортируем компонента

