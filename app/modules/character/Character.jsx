import Link from "next/link"
import Image from "next/image"

import getCharacter from "@/app/services/getCharacter"
import getPlanet from "@/app/services/getPlanet"
import getVehicle from "@/app/services/getVehicle"
import parseStringToSlug from "@/app/utils/parseStringToSlug"
import splitId from "@/app/utils/splitId"

import LinkedElements from "@/app/common/components/organisms/LinkedElements/LinkedElements"

import temporaryAvatar from "@/public/temp-avatar.jpeg"

const Character = async ({ characterId }) => {
  const character = await getCharacter(characterId)
  const planetId = splitId(character.homeworld)
  const planet = await getPlanet(splitId(character.homeworld))
  const vehicles = await Promise.all(character.vehicles.map(vehicle => getVehicle(splitId(vehicle))))

  return (
    <main>
      <Image src={temporaryAvatar} alt={character.name} />
      <h1>{character.name}</h1>
      <p>Planet origin: <Link href={`/planets/${parseStringToSlug(planet.name)}?id=${planetId}`}>{planet.name}</Link></p>
      <p>Gender: {character.gender}</p>

      {vehicles.length > 0 && (
          <LinkedElements elements={vehicles} heading="Connected vehicles:" type="vehicles" />
        )}
    </main>
  )
}

export default Character