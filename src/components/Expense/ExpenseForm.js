import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

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
      Title: title,
      Amount: price,
      Date: new Date(date),
    };
    props.onSaveExpenseData(expensedata);
    setTitle("");
    setPrice("");
    setDate("");
    hideForm();
  }

  function showForm() {
    setIsFormVisible(true);
  }

  function hideForm() {
    setIsFormVisible(false);
  }

  return (
    <div className="new-expense__controls">
      {isFormVisible ? (
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
      ) : (
        <div className="new-expense__actions">
          <button type="button" onClick={showForm}>
            Add Expense
          </button>
        </div>
      )}
    </div>
  );
}

export default ExpenseForm;
