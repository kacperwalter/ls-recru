import Image from "next/image"

import Heading from "@/app/common/components/atoms/Heading/Heading"
import CardLink from "./CardLink"

import './Card.scss'

const Card = ({ data, image }) => {
  return (
    <article className="card">
      <Image
        className="card__image" 
        src={image}
        alt={data.name}
      />
      <div className="card__info">
        <Heading type="h3" text={data.name} />
        <CardLink data={data} />
      </div>
    </article>
  )
}

export default Card