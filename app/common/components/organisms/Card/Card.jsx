import Image from "next/image"

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
        <h3 className="card__heading">{data.name}</h3>
        <CardLink data={data}/>
      </div>
    </article>
  )
}

export default Card