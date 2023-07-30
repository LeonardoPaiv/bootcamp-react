import React from "react";
import { Expensive } from "../model/expensive";
import { IExpenseResume } from "../model/expense.model";

export const expenseContext = React.createContext<{
  expensive: Expensive[];
  expensesResume: IExpenseResume[];
}>({
  expensesResume: [],
  expensive: [],
});
