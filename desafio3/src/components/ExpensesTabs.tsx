import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useContext } from "react";
import ExpensivesTable from "./ExpensivesTable";
import { expenseContext } from "../context/expensive.context";
import ExpensesResume from "./ExpensesResume";

const ExpensesTabs = () => {
  const [value, setValue] = useState(1);

  const expenses = useContext(expenseContext);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="surface-100 border-round w-11">
      <TabContext value={value.toString()}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Resume" value="1" />
          <Tab label="Details" value="2" />
        </TabList>
        <TabPanel value="1">
          <ExpensesResume expenses={expenses.expensesResume} />
        </TabPanel>
        <TabPanel value="2">
          <ExpensivesTable values={expenses.expensive} />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default ExpensesTabs;
