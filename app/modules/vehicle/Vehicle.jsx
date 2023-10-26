import Link from "next/link"
import Image from "next/image"

import getCharacter from "@/app/services/getCharacter"
import getVehicle from "@/app/services/getVehicle"
import splitId from "@/app/utils/splitId"
import parseStringToSlug from "@/app/utils/parseStringToSlug"

import temporaryVehicleImage from "@/public/temp-vehicle.png"

const Vehicle = async ({ vehicleId }) => {
  const vehicle = await getVehicle(vehicleId)
  const pilots = await Promise.all(vehicle.pilots.map(pilot => getCharacter(splitId(pilot))))

  return (
    <main>
      <Image src={temporaryVehicleImage} alt={vehicle.name} />
      <h1>{vehicle.name}</h1>
      <p>Vehicle class: {vehicle.vehicle_class}</p>

      {pilots.length > 0 && (
          <section>
            <h2>Known pilots: </h2>
            <ul>
              {pilots.map((pilot, index) => (
                <li key={index}>
                  <Link href={`/characters/${parseStringToSlug(pilot.name)}?id=${splitId(pilot.url)}`}>
                    {pilot.name}
                  </Link>
                </li>)
              )}
            </ul>
         </section>
        )}
    </main>
  )
}

export default Vehicle