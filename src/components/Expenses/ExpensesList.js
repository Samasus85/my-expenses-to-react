import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {                   // компонент к-й принимает данные в виде пропс при выпол-и условии возвращает заголовок второго уровня т.е. сообщает о том что ничего не найдено
    if (props.expenses.length === 0) {              // условия выполнении фильтрации (если вводимых данных нет)
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>   //возвращение результата,  если условия верна
    }
    return (
        <ul className='expenses-list'>
            {props.expenses.map((el) => {              //  JSX - список данных перебирается - 
                return (                                   //
                    <ExpenseItem                        // данные обьект с другого компонента 
                        key={el.id}
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                    />
                )
            })}
        </ul>
    )
};

export default ExpensesList;                            // экспортиреум компонент