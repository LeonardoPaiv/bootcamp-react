import Rendimento from "./Rendimento";
import MonthResults from "./MonthResults";

const InvestimentCard = ({ titulo = "Titulo", investimentReports = [] }) => {
  console.log(investimentReports);
  return (
    <div className="m-3 border-1 border-blue-100 border-round p-3 text-center">
      <h2 className="text-xl font-bold text-blue-600 my-2">{titulo}</h2>
      {investimentReports.length > 1 && (
        <Rendimento
          initialValue={investimentReports[0].value}
          lastValue={investimentReports[11].value}
        />
      )}
      {investimentReports.map((report, index) => (
        <MonthResults
          key={report.id}
          lastValue={index - 1 === -1 ? 0 : investimentReports[index - 1].value}
          currentValue={investimentReports[index].value}
          month={report.month}
          year={report.year}
        ></MonthResults>
      ))}
    </div>
  );
};

export default InvestimentCard;
