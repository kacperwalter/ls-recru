import getCharacter from "@/app/services/getCharacter"
import getVehicle from "@/app/services/getVehicle"
import splitId from "@/app/utils/splitId"

import LinkedElements from "@/app/common/components/organisms/LinkedElements/LinkedElements"
import Details from "@/app/common/components/organisms/Details/Details"
import Paragraph from "@/app/common/components/atoms/Paragraph/Paragraph"

import temporaryVehicleImage from "@/public/temp-vehicle.png"

const Vehicle = async ({ vehicleId }) => {
  const vehicle = await getVehicle(vehicleId)
  const pilots = await Promise.all(vehicle.pilots.map(pilot => getCharacter(splitId(pilot))))

  return (
    <Details
      image={temporaryVehicleImage}
      imageAlt={vehicle.name}
      heading={vehicle.name}
    >
      <Paragraph>Vehicle class: {vehicle.vehicle_class}</Paragraph>

      {pilots.length > 0 && (
        <LinkedElements elements={pilots} heading="Known pilots:" type="characters" />
      )}
    </Details>
  )
}

export default Vehicle