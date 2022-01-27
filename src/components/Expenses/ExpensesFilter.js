import './ExpensesFilter.css';

const ExpensesFilter = (props) => {                     // компонент к-й фильтрирует пришедщих данных 
    const selectChangeHandler = (event) => {            // ф-я к-я связывает с данными другого компонента 
        props.onChangeFilter(event.target.value)        // привязка двух компонентов (получение данных со значениями)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={selectChangeHandler}> {/*двусторонняя привязка*/}
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    {/* <option value="All">Select All</option> */}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;                                // экспорт компонента