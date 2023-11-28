import Image from "next/image"

import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Heading from "@/app/common/components/atoms/Heading/Heading"

import "./Details.scss"

type DetailsProps = {
  image: string
  imageAlt: string
  heading: string
  children: React.ReactNode
}

const Details = ({ image, imageAlt, heading, children }: DetailsProps) => {
  return (
    <main className="details">
      <Wrapper>
        <Image className="details__image" src={image} alt={imageAlt} />
        <Heading type="h1" text={heading} />
        <div className="details__content">
          {/* That's a place for all information elements that are not passed as props. Split them by using any block html element */}
          {children}
        </div>
      </Wrapper>
    </main>
  )
}

export default Details