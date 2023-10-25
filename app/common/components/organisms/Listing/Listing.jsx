import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import Heading from '@/app/common/components/atoms/Heading/Heading'

import Header from '@/app/common/components/molecules/Header/Header'

import './Listing.scss'

const Listing = ({ children, heading, headingType, caption }) => {
  return (
    <main className="listing">
      <Wrapper>
        <Header 
          headingText={heading} 
          caption={caption}
          headingType={headingType}
        />
        {children}
      </Wrapper>
    </main>
  )
}

export default Listing