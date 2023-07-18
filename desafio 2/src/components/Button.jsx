const Button = ({
  label = "label",
  handleClick = null,
  backgroundColor = "bg-green-300",
  hoverbackground = "bg-green-600",
  fontSize = 'text-xl'
}) => {
  const handleClickButton = () => {
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <button
      className={`border-none border-round ${backgroundColor} hover:${hoverbackground}
    px-2 py-1 text-white cursor-pointer ${fontSize} m-1`}
    onClick={handleClickButton}
    >
      {label}
    </button>
  );
};

export default Button;
