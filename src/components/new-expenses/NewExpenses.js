import ExpenseForm from './ExpenseForm';
import './NewExpenses.css'

const NewExpenses = (props) => {                         // component
  const SaveExpenseDataHandler = (enteredExpenseData) => { //подьем состояния данных с дочернего компонента 
    const expenseData = {                                   // обьект с данными
      ...enteredExpenseData,                                // данные с компонента ExpenseForm
      id: Math.random().toString(),                         // создание уникального ключа для данных 
    };
    props.onAddExpense(expenseData)                         // подьем состояния
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} /> {/*связка с ExpenseForm */}
    </div>
  )
};

export default NewExpenses;                               // экспорт компонента 