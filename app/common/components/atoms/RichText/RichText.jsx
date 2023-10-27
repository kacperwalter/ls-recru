const RichText = ({ text, children }) => {
  return (
    <p className="rich-text">{text || children}</p>
  )
}

export default RichText