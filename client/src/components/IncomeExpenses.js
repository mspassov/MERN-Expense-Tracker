import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((txn) => txn.amount);

  const income = amounts.filter((amt) => amt > 0);
  var totalIncome = 0;

  for (let index = 0; index < income.length; index++) {
    totalIncome = totalIncome + income[index];
  }

  const expense = amounts.filter((amt) => amt < 0);
  var totalExpense = 0;

  for (let index = 0; index < expense.length; index++) {
    totalExpense = totalExpense + expense[index];
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+ ${totalIncome.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">- ${Math.abs(totalExpense).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
