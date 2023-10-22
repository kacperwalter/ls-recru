import Image from 'next/image'

import './CharacterPage.scss'
import temporaryAvatar from "@/public/temp-avatar.jpeg"

const CharacterPage = ({ data: { name, homeworld, vehicles, gender } }) => {

  return (
    <main className="character-page">
      <Image src={temporaryAvatar} alt={name} />
      <h1>{name}</h1>
      <p>{homeworld}</p>
      <p>{vehicles}</p>
      <p>{gender}</p>
    </main>
  )
}

export default CharacterPage