import Image from "next/image"
import Link from "next/link"

import './CharacterCard.scss'

import parseStringToSlug from '@/app/utils/parseStringToSlug'

import temporaryAvatar from "@/public/temp-avatar.jpeg"

const CharacterCard = ({ data }) => {
  return (
    <article className="character-card">
      <Image
        className="character-card__avatar" 
        src={temporaryAvatar}
        alt={data.name}
      />
      <h3 className="character-card__heading">{data.name}</h3>
      <Link href={{
        pathname: `/characters/${parseStringToSlug(data.name)}`,
        query: { id: data.id }
      }}>More about this character</Link>
    </article>
  )
}

export default CharacterCard