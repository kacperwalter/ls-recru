import Image from "next/image"

import './ContentCard.scss'
import CardLink from "./CardLink"

const ContentCard = ({ data, image }) => {
  return (
    <article className="content-card">
      <Image
        className="content-card__image" 
        src={image}
        alt={data.name}
      />
      <div className="content-card__info">
        <h3 className="content-card__heading">{data.name}</h3>
        <CardLink data={data}/>
      </div>
    </article>
  )
}

export default ContentCard