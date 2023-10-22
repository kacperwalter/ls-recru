import Image from 'next/image'
import Link from 'next/link'

import getPlanet from '@/app/utils/getPlanet'
import parseStringToSlug from '@/app/utils/parseStringToSlug'

import Wrapper from '../UI/Wrapper/Wrapper'

import './CharacterPage.scss'
import temporaryAvatar from "@/public/temp-avatar.jpeg"

const CharacterPage = async ({ data: { name, homeworld, vehicles, gender } }) => {
  // TODO util function
  const parts = homeworld.split('/')
  const planetId = parts[parts.length - 2]
  const planet = await getPlanet(planetId)

  return (
    <main className="character-page">
      <Wrapper>
        <Image src={temporaryAvatar} alt={name} />
        <h1>{name}</h1>
        <p>Planet origin: <Link href={`/planets/${parseStringToSlug(planet.name)}?id=${planetId}`}>{planet.name}</Link></p>
        {vehicles} 
        <p>Gender: {gender}</p>
      </Wrapper>
    </main>
  )
}

export default CharacterPage