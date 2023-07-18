const Card = ({
  children = "Conteudo",
  borderColorClass = "border-blue-100",
}) => {
  return (
    <div
      className={`m-3 border-1 border-round p-3 ${borderColorClass}
                  flex flex-row flex-wrap justify-content-center`}
    >
      {children}
    </div>
  );
};

export default Card;
