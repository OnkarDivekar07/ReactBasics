function ExpenseDate() {
  const expenseDate = new Date();
  return <p>{expenseDate.toISOString()}</p>;
}

export default ExpenseDate;
