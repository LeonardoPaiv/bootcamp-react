import { useEffect, useState } from "react";
import { expenseContext } from "../context/expensive.context";
import ExpensesService from "../service/expenses.service";
import ExpensesTabs from "../components/ExpensesTabs";
import MonthPicker from "../components/MonthPicker";
import { Expensive } from "../model/expensive";
import { getTodayYearMonth } from "../helpers/date";
import { getCurrency } from "../helpers/stringHelpers";
import { IExpenseResume } from "../model/expense.model";

const Home = () => {
  const [todayYear, todayMonth] = getTodayYearMonth().split("-");
  const [expensives, setexpensives] = useState<{
    expensive: Expensive[];
    expensesResume: IExpenseResume[];
  }>({ expensive: [], expensesResume: [] });
  const [total, setTotal] = useState(0);
  const [month, setMonth] = useState<string>(todayMonth);
  const [year, setYear] = useState<string>(todayYear);

  useEffect(() => {
    const getMonthExpensives = async () => {
      const data = await ExpensesService.getExpensives(`${year}-${month}`);
      setexpensives({expensesResume: data.expensesResume, expensive: data.expensive});
      setTotal(data.total);
    };

    void getMonthExpensives();
  }, [year, month]);

  return (
    <div className="flex flex-column align-content-center justify-content-center flex-wrap">
      <div className="flex flex-row align-items-center justify-content-between my-3">
        <MonthPicker
          month={month}
          year={year}
          updateMonth={setMonth}
          updateYear={setYear}
        />
        <h2 className="text-xl">
          Total expense:{" "}
          <strong className="font-bold">{getCurrency(total)}</strong>
        </h2>
      </div>
      <expenseContext.Provider value={expensives}>
        <ExpensesTabs />
      </expenseContext.Provider>
    </div>
  );
};

export default Home;
