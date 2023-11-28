import Listing from "@/app/common/components/organisms/Listing/Listing"
import Card from "@/app/common/components/organisms/Card/Card"

import getAllElements from "@/app/services/getAllElements"

import temporaryVehicleImage from "@/public/temp-vehicle.png"

interface Vehicle {
  name: string
  vehicle_class: string
  pilots: string[]
}

const Vehicles = async () => {
  const vehicles: Vehicle[] = await getAllElements("vehicles", 38)

  return (
    <Listing
      heading="Star Wars Vehicles"
      headingType="h1"
      caption="List Vehicles are used in Star Wars"
    >
      {vehicles.map((vehicle: Vehicle, index: number) => (
        <Card
          image={temporaryVehicleImage}
          key={index}
          id={index}
          data={vehicle}
        />
      ))}
    </Listing>
  )
}

export default Vehicles