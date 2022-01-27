import React from "react";
import Chart from "../chart/Chart";       // получение доступ к другому компоненту


const ExpensesChart = (props) => {
  const chartDataPoints = [             // данные к-ые должны приходит с сервера
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ];

  for (const expense of props.allExpenses) {
    const expenseMonth = expense.date.getMonth();      // starting at 0 Jan =0index
    chartDataPoints[expenseMonth].value += expense.amount // поступают расходы за месяц
  }

  return (
    <Chart dataPoints={chartDataPoints} />

  )

};

export default ExpensesChart;