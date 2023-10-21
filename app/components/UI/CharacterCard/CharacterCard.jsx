import Image from "next/image"

import temporaryLogo from "@/public/vercel.svg"

const CharacterCard = ({ name, avatar }) => {
  return (
    <article>
      <h3>{name}</h3>
      <Image 
        src={temporaryLogo}
        alt={name}
        width={500}
        height={500}
      />
    </article>
  )
}

export default CharacterCard