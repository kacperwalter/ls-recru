import Image from 'next/image'

import Wrapper from '../UI/Wrapper/Wrapper'

import temporaryAvatar from "@/public/temp-avatar.jpeg"

const PlanetPage = ({ data: { name, population, residents }}) => {
  return (
    <main className="planet-page">
      <Wrapper>
      <Image src={temporaryAvatar} alt={name} />
        <h1>{name}</h1>
        <p>{population}</p>
        <p>{residents}</p>
      </Wrapper>
    </main>
  )
}

export default PlanetPage