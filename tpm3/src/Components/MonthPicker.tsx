import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface IMonthPicker {
  months: string[];
  years: string[];
  month: string;
  year: string;
  updateMonth: React.Dispatch<React.SetStateAction<string>>;
  updateYear: React.Dispatch<React.SetStateAction<string>>;
}

const MonthPicker = (props: IMonthPicker) => {
  const { months, years, month, year, updateMonth, updateYear } = props;

  const handleMonthChange = (event: SelectChangeEvent) => {
    updateMonth(event.target.value);
  };

  const handleYearChange = (event: SelectChangeEvent) => {
    updateYear(event.target.value);
  };

  return (
    <div className="flex flex-row">
      <span className="m-2 w-10rem">
        <InputLabel id="year">Year</InputLabel>
        <Select
          labelId="year"
          value={year}
          label="Year"
          fullWidth
          onChange={handleYearChange}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </span>
      <span className="m-2 w-10rem">
        <InputLabel id="month">Month</InputLabel>
        <Select
          labelId="month"
          value={month}
          label="Month"
          fullWidth
          onChange={handleMonthChange}
        >
          {months.map((month, i) => (
            <MenuItem key={month} value={`${(i + 1).toString().padStart(2, '0')}`}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </span>
    </div>
  );
};

export default MonthPicker;
