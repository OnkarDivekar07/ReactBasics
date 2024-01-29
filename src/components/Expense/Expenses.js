import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  function SaveExpenseDatahandler(receivedExpenseData) {
    console.log(receivedExpenseData);
    const newExpenseData = {
      ...receivedExpenseData,
      id: Math.random().toString(),
    };
    props.OnAppExpenses(newExpenseData);
  }

  return (
    <Card>
      <h2>Let's get started!</h2>
      <ExpenseForm onSaveExpenseData={SaveExpenseDatahandler}></ExpenseForm>
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          Date={expense.Date}
          Title={expense.Title}
          Amount={expense.Amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
