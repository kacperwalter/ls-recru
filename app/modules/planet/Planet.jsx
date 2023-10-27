import Image from "next/image"

import getPlanet from "@/app/services/getPlanet"
import getCharacter from "@/app/services/getCharacter"
import splitId from "@/app/utils/splitId"

import LinkedElements from "@/app/common/components/organisms/LinkedElements/LinkedElements"
import Details from "@/app/common/components/organisms/Details/Details"
import RichText from "@/app/common/components/atoms/RichText/RichText"

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
      <RichText>Population: {planet.population}</RichText>

      {residents.length > 0 && (
        <LinkedElements elements={residents} heading="Known residents:" type="characters" />
      )}
    </Details>
  )
}

export default Planet