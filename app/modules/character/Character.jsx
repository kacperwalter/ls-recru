import Link from "next/link"

import getCharacter from "@/app/services/getCharacter"
import getPlanet from "@/app/services/getPlanet"
import getVehicle from "@/app/services/getVehicle"
import parseStringToSlug from "@/app/utils/parseStringToSlug"
import splitId from "@/app/utils/splitId"

import LinkedElements from "@/app/common/components/organisms/LinkedElements/LinkedElements"
import Details from "@/app/common/components/organisms/Details/Details"
import RichText from "@/app/common/components/atoms/RichText/RichText"

import temporaryAvatar from "@/public/temp-avatar.jpeg"

const Character = async ({ characterId }) => {
  const character = await getCharacter(characterId)
  const planetId = splitId(character.homeworld)
  const planet = await getPlanet(splitId(character.homeworld))
  const vehicles = await Promise.all(character.vehicles.map(vehicle => getVehicle(splitId(vehicle))))

  return (
    <Details
      image={temporaryAvatar}
      imageAlt={character.name}
      heading={character.name}
    >
      <RichText>Planet origin: <Link href={`/planets/${parseStringToSlug(planet.name)}?id=${planetId}`}>{planet.name}</Link></RichText>
      <RichText>Gender: {character.gender}</RichText>

      {vehicles.length > 0 && (
        <LinkedElements elements={vehicles} heading="Connected vehicles:" type="vehicles" />
      )}
    </Details>
  )
}

export default Character