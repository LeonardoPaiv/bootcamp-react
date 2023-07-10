const MonthResults = ({ lastValue = 0, currentValue = 0, month = 0, year = 0 }) => {

    let rentabilidade;
    if (lastValue !== 0) {
        rentabilidade = ((currentValue - lastValue) / lastValue * 100 ).toFixed(2)
    }

  return <div className={`flex flex-row my-2 justify-content-between text-lg p-1 border-round
  ${rentabilidade < 0 ? "bg-red-100" : "bg-green-100"}`}>
    <span>
    {`${month.toString().padStart(2, 0)}/${year} - `}{currentValue.toFixed(2)}
    </span>
    <span className={rentabilidade < 0 ? "text-red-600" : "text-green-600"}>
    {!rentabilidade ? '00.0%' : `${rentabilidade}%`}
    </span>
  </div>;
};

export default MonthResults;
