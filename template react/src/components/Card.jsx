const Card = ({ children = "Conteudo" }) => {
  return (
    <div className="m-3 border-1 border-blue-100 border-round p-3">
      {children}
    </div>
  );
};

export default Card;
