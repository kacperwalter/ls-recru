import Wrapper from "@/app/components/UI/Wrapper/Wrapper"

// import './Listing.scss'

const Listing = ({ children, heading }) => {
  return (
    <main className="listing">
      <Wrapper>
        {/* TODO */}
        <h1>{heading}</h1>
        <section>
          {children}
        </section>
      </Wrapper>
    </main>
  )
}

export default Listing