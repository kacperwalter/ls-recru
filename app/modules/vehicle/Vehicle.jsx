import Image from "next/image"

import getCharacter from "@/app/services/getCharacter"
import getVehicle from "@/app/services/getVehicle"
import splitId from "@/app/utils/splitId"

import LinkedElements from "@/app/common/components/organisms/LinkedElements/LinkedElements"

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
        <LinkedElements elements={pilots} heading="Known pilots:" type="characters" />
      )}
    </main>
  )
}

export default Vehicle