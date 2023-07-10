
const Header = ({
    titulo = 'Seu título',
    backgroundColorClass = 'bg-blue-400',
    textColor = 'text-0'
}) => {
  return (
    <div className={`text-center ${backgroundColorClass}`}>
        <h2 className={`p-3 text-xl font-semibold text-0 ${textColor}`}>{titulo}</h2>
    </div>
  )
}

export default Header