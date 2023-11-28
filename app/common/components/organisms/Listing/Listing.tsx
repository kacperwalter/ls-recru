import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import Header from '@/app/common/components/molecules/Header/Header'

import './Listing.scss'

type ListingProps = {
  children: React.ReactNode
  heading: string
  headingType?: string
  caption: string
}

const Listing = ({ children, heading, headingType, caption }: ListingProps) => {
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