import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((txn) => txn.amount);
  var total = 0;

  for (let i = 0; i < amounts.length; i++) {
    total = total + amounts[i];
  }
  return (
    <React.Fragment>
      <h4>Current Balance</h4>
      <h1>${total.toFixed(2)}</h1>
    </React.Fragment>
  );
};

export default Balance;
