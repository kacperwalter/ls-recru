import './Wrapper.scss'

type WrapperProps = {
  children: React.ReactNode
  additionalClass?: string
}

const Wrapper = ({ children, additionalClass }: WrapperProps) => {
  return (
    <div className={`wrapper ${additionalClass && additionalClass}`}>
      {children}
    </div>
  )
}

export default Wrapper