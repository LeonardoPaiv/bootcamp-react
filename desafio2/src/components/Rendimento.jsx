
const Rendimento = ({ initialValue = 0, lastValue = 0 }) => {

    const rendimento = (lastValue - initialValue).toFixed(2)

  return (
    <h3>
      Rendimento total: R$:{" "}
      <strong
        className={
          rendimento / initialValue > 0 ? "text-green-600" : "text-red-600"
        }
      >
        {rendimento}
        {" ("}
        {((rendimento / initialValue) * 100).toFixed(2)}
        {"%)"}
      </strong>
    </h3>
  );
};

export default Rendimento;
