import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import "./components/Expense/Expenses.css";
const dummyexpenses = [
  {
    Date: new Date(), // Assuming this is today's date
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

function App() {
  const [expenses, setExpenses] = useState(dummyexpenses);

  function addexpensedata(reciveddatafromexpenses) {
    console.log(reciveddatafromexpenses);
    setExpenses((preExpenses) => {
      return [reciveddatafromexpenses, ...preExpenses];
    });
  }
  return (
    <div className="new-expense">
      <Expenses OnAppExpenses={addexpensedata} item={expenses}></Expenses>
    </div>
  );
}

export default App;
