import Listing from "@/app/common/components/organisms/Listing/Listing"
import Card from "@/app/common/components/organisms/Card/Card"

import getAllElements from "@/app/services/getAllElements"

import temporaryVehicleImage from "@/public/temp-vehicle.png"

const Vehicles = async () => {
  const vehicles = await getAllElements("vehicles", 38)

  return (
    <Listing 
      heading="Star Wars Vehicles" 
      headingType="h1"
      caption="List Vehicles are used in Star Wars"
    >
      {vehicles.map((vehicle, index) => (
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