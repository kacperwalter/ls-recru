import ContentCard from "../ContentCard/ContentCard"
import Listing from "../../UI/Listing/Listing"

import getVehicle from "@/app/utils/getVehicle"

import temporaryVehicle from "@/public/temp-vehicle.png"

const getAllVehicles = async (vehicleCount) => {
  const allVehicles = []

  for (let i = 1; i <= vehicleCount; i++) {
    const vehicle = await getVehicle(i)
    if (vehicle.detail !== 'Not found') {
      allVehicles.push(vehicle)
    }
  }

  return allVehicles
}

const VehiclesPage = async () => {
  const vehicles = await getAllVehicles(38)

  return (
    <Listing heading="Star Wars Vehicles">
      {vehicles.map((vehicle, index) => (
        <ContentCard
          image={temporaryVehicle} 
          key={index}
          id={index}
          data={vehicle}
        />
      ))}
    </Listing>
  )
}

export default VehiclesPage