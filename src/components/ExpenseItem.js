import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = "Carinsurance";
  const expenseAmount = 200;

  return (
    <div className="expense-item">
      <h2>Expense Item!</h2>
      <div className="expense-item__description">
        <p>{expenseAmount}</p>
        <p>{expenseDate.toISOString()}</p>
        <p>{expenseTitle}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
