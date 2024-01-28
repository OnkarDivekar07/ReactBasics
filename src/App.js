import Expenses from "./components/Expense/Expenses";
import "./components/Expense/Expenses.css";
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
  function addexpensedata(reciveddatafromexpenses) {
    console.log("app.js");
    console.log(reciveddatafromexpenses);
  }
  return (
    <div className="new-expense">
      <Expenses OnAppExpenses={addexpensedata} item={expense}></Expenses>
    </div>
  );
}

export default App;
