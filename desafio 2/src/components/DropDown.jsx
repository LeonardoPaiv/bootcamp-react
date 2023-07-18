import newId from '../helpers/uuid'
const DropDown = ({
    id = newId(),
    children,
    value = '',
    handleChange = null
}) => {

  const handleDropdown = (event) => {
    if (handleChange) {
      handleChange(event.target.value)
    }

  }

  return (
    <div className='flex flex-column w-10rem my-2'>
        <label htmlFor={id}>Choose the municipality</label>
        <select 
        className='p-1 my-1 border-0 shadow-2' 
        name={id} 
        id={id} 
        placeholder='Select one city'
        value={value}
        onChange={handleDropdown}
        >
          <option value="" disabled></option>
            {children}
        </select>
    </div>
  )
}

export default DropDown