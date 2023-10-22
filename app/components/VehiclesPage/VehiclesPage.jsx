import ContentCard from "../ContentCard/ContentCard"
import Wrapper from "../UI/Wrapper/Wrapper"

import getVehicle from "@/app/utils/getVehicle"

import temporaryVehicle from "@/public/temp-vehicle.png"

import './VehiclesPage.scss'

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
    <main className="vehicles-page">
      <Wrapper>
        <h1>Star Wars Vehicles</h1>
        <section>
          {vehicles.map((vehicle, index) => (
            <ContentCard
              image={temporaryVehicle} 
              key={index}
              id={index}
              data={vehicle}
            />
          ))}
        </section>
      </Wrapper>
    </main>
  )
}

export default VehiclesPage