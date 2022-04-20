import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === Number(filteredYear));

  return (
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;