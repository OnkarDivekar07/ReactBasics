import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem() {
  const expenseTitle = "Carinsurance";
  const expenseAmount = 200;

  return (
    <div className="expense-item">
      <h2>Expense Item!</h2>
      <div className="expense-item__description">
        <ExpenseDate></ExpenseDate>
        <p>{expenseAmount}</p>
        <p>{expenseTitle}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
