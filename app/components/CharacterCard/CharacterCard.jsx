import Image from "next/image"

import './CharacterCard.scss'
import CharacterLink from "./CharacterLink"

import temporaryAvatar from "@/public/temp-avatar.jpeg"

const CharacterCard = ({ data }) => {
  return (
    <article className="character-card">
      <Image
        className="character-card__avatar" 
        src={temporaryAvatar}
        alt={data.name}
      />
      <div className="character-card__info">
        <h3 className="character-card__heading">{data.name}</h3>
        <CharacterLink data={data}/>
      </div>
    </article>
  )
}

export default CharacterCard