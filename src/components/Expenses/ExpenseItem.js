import ExpenseDate from './ExpenseDate';           // импортируем , получаем доступ к другим компонентам
import './ExpenseItem.css';                         // импорт стилей для этого компонента
import Card from '../../ui/Cards/Card';


function ExpenseItem(props) {
  return (                                        //возвращает jsx код
    <Card className='expense-item'>               {/* обертка */}
      <ExpenseDate date={props.date} />           {/* привязка данных с  ExpenseDate*/}
      <h2 className='expense-item__description'>{props.title}</h2>    {/* в виде props придет описание  */}
      <div className='expense-item__price'>${props.amount}</div>      {/* в виде props придет цена  */}
    </Card>
  );
}
export default ExpenseItem; //экспортируем, чтобы  могли использовать этого компонента в других компонентах