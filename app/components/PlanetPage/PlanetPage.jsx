import Image from 'next/image'
import Link from 'next/link'

import Wrapper from '../UI/Wrapper/Wrapper'

import splitId from '@/app/utils/splitId'
import getCharacter from '@/app/utils/getCharacter'
import parseStringToSlug from '@/app/utils/parseStringToSlug'

import './PlanetPage.scss'

import temporaryPlanet from "@/public/temp-planet.webp"

const PlanetPage = async ({ data: { name, population, residents }}) => {
  const residentsData = await Promise.all(residents.map(resident => getCharacter(splitId(resident))))

  return (
    <main className="planet-page">
      <Wrapper>
        <Image src={temporaryPlanet} alt={name} />
        <h1>Planet name: {name}</h1>
        <p>Population: {population}</p>

        {residents.length > 0 && (
         <div>
          <p>Known residents: </p>
          <ul>
          {residentsData.map((resident, index) => (
            <li key={index}>
              <Link href={`/characters/${parseStringToSlug(resident.name)}?id=${splitId(resident.url)}`}>
                {resident.name}
              </Link>
            </li>
          ))}
          </ul>
         </div>
        )}
      </Wrapper>
    </main>
  )
}

export default PlanetPage