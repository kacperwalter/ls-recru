import Wrapper from "../Wrapper/Wrapper"

import './Listing.scss'

const Listing = ({ children, heading }) => {
  return (
    <main className="listing">
      <Wrapper>
        <h1>{heading}</h1>
        <section>
          {children}
        </section>
      </Wrapper>
    </main>
  )
}

export default Listing