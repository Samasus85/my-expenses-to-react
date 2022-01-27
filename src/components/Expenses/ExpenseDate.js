import './ExpenseDate.css';                                       // импорт стилей

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-Us', { month: 'long' }); // создали переменную, к-я хранит в себе приходящих данных(месяца), после используется
    const day = props.date.toLocaleString('en-Us', { day: '2-digit' });   // создали переменную, к-я хранит в себе приходящих данных (дни), после используется
    const year = props.date.getFullYear();                              // создали переменную, к-я хранит в себе приходящих данных (годы), после используется
    return (                                                             // рендер получаемых данных - выбранные в календаре пользователем (месяц, число, год)
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
}

export default ExpenseDate;                                             // экспорт компонента