import { ExpensiveResponse, IExpenseResume } from "../model/expense.model";
import { axiosInstance } from "./axiosInstance";

const getExpensives = async (data: string) => {
  const response = await axiosInstance.get<ExpensiveResponse[]>(
    `/despesas?mes=${data}&_sort=dia`
  );

  let total = 0;
  const categories: string[] = []
  const expensesResume: IExpenseResume[] = []

  for (const item of response.data) {
    total += item.valor;
    if (!categories.includes(item.categoria)) {
        categories.push(item.categoria)
    }
  }

  for (const category of categories) {
    const filtredExpense = response.data.filter(expense => expense.categoria === category)
    const total = filtredExpense.reduce((a, b) => a + b.valor, 0)
    expensesResume.push({category, total})
  }

  return { expensive: response.data, total, expensesResume };
};

export default { getExpensives };
