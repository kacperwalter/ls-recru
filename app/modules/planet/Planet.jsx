import Image from "next/image"

import getPlanet from "@/app/services/getPlanet"
import getCharacter from "@/app/services/getCharacter"
import splitId from "@/app/utils/splitId"

import LinkedElements from "@/app/common/components/organisms/LinkedElements/LinkedElements"

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
        <LinkedElements elements={residents} heading="Known residents:" type="characters" />
      )}
    </main>
  )
}

export default Planet