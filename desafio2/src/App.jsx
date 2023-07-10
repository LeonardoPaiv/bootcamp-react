import InvestimentCard from "./components/InvestimentCard";
import Header from "./components/Header";
import { investimentos } from "./data/investimentios";

function App() {
  return (
    <div className="flex flex-column w-full">
      <Header titulo="React Investments" />
      {investimentos.investments.map((investiment) => (
        <InvestimentCard
          key={investiment.id}
          titulo={investiment.description}
          investimentReports={investimentos.reports
            .filter((report) => report.investmentId === investiment.id)
            .sort((a, b) => a.month - b.month)}
        />
      ))}
    </div>
  );
}

export default App;
