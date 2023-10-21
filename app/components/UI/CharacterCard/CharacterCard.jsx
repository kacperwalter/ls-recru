import Image from "next/image"

import './CharacterCard.scss'

import temporaryLogo from "@/public/temp-avatar.jpeg"

const CharacterCard = ({ name, avatar }) => {
  return (
    <article className="character-card">
      <Image
        className="character-card__avatar" 
        src={temporaryLogo}
        alt={name}
      />
      <h3 className="character-card__heading">{name}</h3>
    </article>
  )
}

export default CharacterCard