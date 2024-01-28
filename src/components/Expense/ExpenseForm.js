import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  function titleHandler(event) {
    setTitle(event.target.value);
  }
  function priceHandler(event) {
    setPrice(event.target.value);
  }
  function dateHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expensedata = {
      title: title,
      price: price,
      date: new Date(date),
    };
    props.onSaveExpenseData(expensedata);
    setTitle("");
    setPrice("");
    setDate("");
  }

  return (
    <div className="new-expense__controls">
      <form onSubmit={submitHandler}>
        <div className="new-expense__control">
          <label htmlFor="ExpenseTitle">Expense Title</label>
          <input
            type="text"
            value={title}
            onChange={titleHandler}
            placeholder="Enter the Title"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            value={price}
            onChange={priceHandler}
            placeholder="Enter the Amount"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            onChange={dateHandler}
            value={date}
            placeholder="Enter the date"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
