
const Strong = ({children ,fontSize = 'text-xl'}) => {
  return (
    <strong className={`font-bold ${fontSize}`}>{children}</strong>
  )
}

export default Strong