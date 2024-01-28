import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./Expenses.css";
function Expenses(props) {
  function SaveExpenseDatahandler(reciviedexpensedata) {
    const newexpensedata = {
      ...reciviedexpensedata,
      id: Math.random().toString(),
    };
    props.OnAppExpenses(newexpensedata);
  }

  return (
    <Card>
      <h2>Let's get started!</h2>
      <ExpenseForm onSaveExpenseData={SaveExpenseDatahandler}></ExpenseForm>
      <ExpenseItem
        Date={props.item[0].Date}
        Title={props.item[0].Title}
        Amount={props.item[0].Amount}
      ></ExpenseItem>
      <ExpenseItem
        Date={props.item[1].Date}
        Title={props.item[1].Title}
        Amount={props.item[1].Amount}
      ></ExpenseItem>
      <ExpenseItem
        Date={props.item[2].Date}
        Title={props.item[2].Title}
        Amount={props.item[2].Amount}
      ></ExpenseItem>
      <ExpenseItem
        Date={props.item[3].Date}
        Title={props.item[3].Title}
        Amount={props.item[3].Amount}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
