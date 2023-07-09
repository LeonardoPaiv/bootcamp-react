
const InputText = ({
  id = "inputID",
  inputLabel = "Label do input",
  inputValue = "Valor do Input",
  onChangeMethod = null,
  autoFocus = false,
}) => {

    const handleInput = (event) => {
        onChangeMethod(event.target.value)
    }

  return (
    <div className="flex flex-column">
      <label htmlFor={id}>{inputLabel}:</label>
      <input
      className="p-1"
        type="text"
        id={id}
        value={inputValue}
        autoFocus={autoFocus}
        onChange={handleInput}
      />
    </div>
  );
};

export default InputText;
