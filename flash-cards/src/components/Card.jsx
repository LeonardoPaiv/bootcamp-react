import { useState } from "react";

const Card = ({
  titulo = "Titulo do card",
  descricao = "Descrição do card",
}) => {
  const [showTitle, setShowTitle] = useState(true);

  let fontClass = showTitle ? "font-bold" : "";

  const handleClick = () => {
    setShowTitle((prev) => !prev);
  };
  return (
    <div
      className={`m-3 shadow-5 border-1 border-blue-100 border-round p-3
                  w-10rem cursor-pointer ${fontClass}`}
                  style={{fontFamily: 'monospace'}}
      onClick={handleClick}
    >
      {showTitle ? titulo : descricao}
    </div>
  );
};

export default Card;
