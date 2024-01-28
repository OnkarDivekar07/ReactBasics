import ExpenseItem from "./components/Expense/ExpenseItem";
import ExpenseForm from "./components/Expense/ExpenseForm";
import Card from "./components/UI/Card";
function App() {
  const expense = [
    {
      Date: new Date(),
      Title: "bike Insurance",
      Amount: "100",
    },
    {
      Date: new Date(),
      Title: "health Insurance",
      Amount: "200",
    },
    {
      Date: new Date(),
      Title: "home Insurance",
      Amount: "300",
    },
    {
      Date: new Date(),
      Title: "car Insurance",
      Amount: "400",
    },
  ];
  return (
    <Card>
      <h2>Let's get started!</h2>
      <ExpenseForm></ExpenseForm>
      <ExpenseItem
        Date={expense[0].Date}
        Title={expense[0].Title}
        Amount={expense[0].Amount}
      ></ExpenseItem>
      <ExpenseItem
        Date={expense[1].Date}
        Title={expense[1].Title}
        Amount={expense[1].Amount}
      ></ExpenseItem>
      <ExpenseItem
        Date={expense[2].Date}
        Title={expense[2].Title}
        Amount={expense[2].Amount}
      ></ExpenseItem>
      <ExpenseItem
        Date={expense[3].Date}
        Title={expense[3].Title}
        Amount={expense[3].Amount}
      ></ExpenseItem>
    </Card>
  );
}

export default App;
