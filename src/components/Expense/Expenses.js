import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
import FilterYears from './FilterYears';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('');

  function SaveExpenseDatahandler(receivedExpenseData) {
    const newExpenseData = {
      ...receivedExpenseData,
      id: Math.random().toString(),
    };
    props.OnAppExpenses(newExpenseData);
  }

  const handleFilterYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return !filteredYear || new Date(expense.Date).getFullYear().toString() === filteredYear;
  });

  return (
    <Card>
      <h2>Let's get started!</h2>
      <ExpenseForm onSaveExpenseData={SaveExpenseDatahandler} />
      <FilterYears onFilterYear={handleFilterYear} />
      {filteredExpenses.length === 0 ? (
        <p>No expenses found for the selected year.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            Date={expense.Date}
            Title={expense.Title}
            Amount={expense.Amount}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
