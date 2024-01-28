import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [price, setPrice] = useState(props.Amount);
  const eventHandler = () => {
    setPrice("100$");
    console.log(price);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.Date} />
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
      <button onClick={eventHandler}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;
