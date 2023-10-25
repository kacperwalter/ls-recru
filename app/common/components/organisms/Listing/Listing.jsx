import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import Heading from '@/app/common/components/atoms/Heading/Heading'

import './Listing.scss'

const Listing = ({ children, heading }) => {
  return (
    <main className="listing">
      <Wrapper>
        <Heading type="h1" text={heading} />
        {children}
      </Wrapper>
    </main>
  )
}

export default Listing