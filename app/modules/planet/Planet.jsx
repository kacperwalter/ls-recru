import Image from "next/image"

import getPlanet from "@/app/services/getPlanet"
import getCharacter from "@/app/services/getCharacter"
import splitId from "@/app/utils/splitId"

import LinkedElements from "@/app/common/components/organisms/LinkedElements/LinkedElements"
import Details from "@/app/common/components/organisms/Details/Details"
import Paragraph from "@/app/common/components/atoms/Paragraph/Paragraph"

import temporaryPlanetImage from "@/public/temp-planet.webp"

const Planet = async ({ planetId }) => {
  const planet = await getPlanet(planetId)
  const residents = await Promise.all(planet.residents.map(resident => getCharacter(splitId(resident))))

  return (
    <Details
      image={temporaryPlanetImage}
      imageAlt={planet.name}
      heading={planet.name}
    >
      <Paragraph>Population: {planet.population}</Paragraph>

      {residents.length > 0 && (
        <LinkedElements elements={residents} heading="Known residents:" type="characters" />
      )}
    </Details>
  )
}

export default Planet