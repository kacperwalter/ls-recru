type RichTextProps = {
  text?: string
  children?: React.ReactNode
}

const RichText = ({ text, children }: RichTextProps) => {
  return (
    <p className="rich-text">{text || children}</p>
  )
}

export default RichText