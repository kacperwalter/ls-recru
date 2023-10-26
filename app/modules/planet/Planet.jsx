import Image from "next/image"
import Link from "next/link"

import getPlanet from "@/app/services/getPlanet"
import getCharacter from "@/app/services/getCharacter"
import parseStringToSlug from "@/app/utils/parseStringToSlug"
import splitId from "@/app/utils/splitId"

import temporaryPlanetImage from "@/public/temp-planet.webp"

const Planet = async ({ planetId }) => {
  const planet = await getPlanet(planetId)
  const residents = await Promise.all(planet.residents.map(resident => getCharacter(splitId(resident))))

  return (
  <main>
    <Image src={temporaryPlanetImage} alt={planet.name} />
    <h1>{planet.name}</h1>
    <p>Population: {planet.population}</p>

    {residents.length > 0 && (
      <section>
      <h2>Known residents: </h2>
      <ul>
        {residents.map((resident, index) => (
          <li key={index}>
            <Link href={`/characters/${parseStringToSlug(resident.name)}?id=${splitId(resident.url)}`}>
              {resident.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
    )}
  </main>
  )
}

export default Planet