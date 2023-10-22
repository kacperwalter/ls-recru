import Wrapper from "../Wrapper/Wrapper"

import './DetailsWrapper.scss'

const DetailsWrapper = ({ children }) => {
  return (
    <Wrapper additionalClass="details-wrapper">
      {children}
    </Wrapper>
  )
}

export default DetailsWrapper