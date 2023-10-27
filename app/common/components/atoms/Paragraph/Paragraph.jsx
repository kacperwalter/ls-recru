const Paragraph = ({ text, children }) => {
  return (
    <p className="paragraph">{text || children}</p>
  )
}

export default Paragraph