import './Wrapper.scss'

const Wrapper = ({ children, additionalClass }) => {
  return (
    <div className={`wrapper ${additionalClass && additionalClass}`}>
      {children}
    </div>
  )
}

export default Wrapper