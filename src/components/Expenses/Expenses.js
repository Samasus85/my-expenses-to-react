import React, { useState } from 'react';                // импортируем useState т.е. получаем доступ для использования
import './Expenses.css';                                // получение стилей для этого компонента
import Card from '../../ui/Cards/Card';                 // импорт обертки
import ExpensesFilter from './ExpensesFilter';          // импорт компонента
import ExpensesList from './ExpensesList';              // импорт компонента
import ExpensesChart from './ExpensesChart';            // импорт компонента

function Expenses(props) {                              // компонент с пропс получает данные с App component 
    const [filteredYear, setFilteredYear] = useState('All'); // useState 
    const filterChangeHandler = (selectedYear) => {          // функция к-ая выполняет фильтрацию пропс selecttedYear поступает ч-з подьем состояния
        setFilteredYear(selectedYear)
    };//метод к-й исп-ся внутри компонента ExpensesFilter  вызывается как пропс для получения данных
    const filteredExpenses = props.items.filter(expense => {      // фильтрация поступивщих данных                // это метод к-ый вып-т получения данных из filtered 
        return expense.date.getFullYear().toString() === filteredYear;    //возвращение после сравнении даты
    });
    return (
        <Card className='expenses'>             {/* Это обертка */}
            <ExpensesFilter                     // render данных после фильтрации
                selected={filteredYear}         // двустороняя привязка 
                onChangeFilter={filterChangeHandler}    //props к-й перед-м в ExpenseFilter для подьема состоянии   
            />
            <ExpensesChart                      // render статистики
                expenses={filteredExpenses}     // отфильтрованный массив
                selected={filteredYear}         // двусторонняя привязка 
            />
            <ExpensesList                       // рендер расходов
                expenses={props.items}         // data
            />
        </Card>
    );
};

export default Expenses;

