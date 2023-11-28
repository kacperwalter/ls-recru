import getCharacter from "@/app/services/getCharacter"
import getVehicle from "@/app/services/getVehicle"
import splitId from "@/app/utils/splitId"

import LinkedElements from "@/app/common/components/organisms/LinkedElements/LinkedElements"
import Details from "@/app/common/components/organisms/Details/Details"
import RichText from "@/app/common/components/atoms/RichText/RichText"

import temporaryVehicleImage from "@/public/temp-vehicle.png"

type VehicleProps = {
  vehicleId: string
}

interface Vehicle {
  name: string
  vehicle_class: string
  pilots: string[]
}

const Vehicle = async ({ vehicleId }: VehicleProps) => {
  const vehicle: Vehicle = await getVehicle(vehicleId)
  const pilots = await Promise.all(vehicle.pilots.map(pilot => getCharacter(splitId(pilot))))

  return (
    <Details
      image={temporaryVehicleImage}
      imageAlt={vehicle.name}
      heading={vehicle.name}
    >
      <RichText>Vehicle class: {vehicle.vehicle_class}</RichText>

      {pilots.length > 0 && (
        <LinkedElements elements={pilots} heading="Known pilots:" type="characters" />
      )}
    </Details>
  )
}

export default Vehicle