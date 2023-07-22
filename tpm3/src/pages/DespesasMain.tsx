import ExpensivesTable from "../Components/ExpensivesTable";
import MonthPicker from "../Components/MonthPicker";
import { getTodayYearMonth, months, years } from "../helpers/date";
import { getCurrency } from "../helpers/stringHelpers";
import { IExpensive } from "../model/expensive";
import { getExpensives } from "../services/expensives";
import { useEffect, useState } from "react";

const DespesasMain = () => {
  const [todayYear, todayMonth] = getTodayYearMonth().split('-')
  const [expensives, setexpensives] = useState<IExpensive[]>([]);
  const [total, setTotal] = useState(0);
  const [month, setMonth] = useState<string>(todayMonth);
  const [year, setYear] = useState<string>(todayYear);

  useEffect(() => {
    const getMonthExpensives = async () => {
      const data = await getExpensives(`${year}-${month}`);
      setexpensives(data.expensive);
      setTotal(data.total);
    };

    void getMonthExpensives();
  }, [year, month]);

  return (
    <div className="p-4">
      <div className="flex flex-row align-items-center justify-content-between my-3">
        <MonthPicker
          months={months}
          years={years}
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
      <ExpensivesTable values={expensives} />
    </div>
  );
};

export default DespesasMain;
