import getVehicle from "./getVehicle"

const getAllVehicles = async vehicleCount => {
  const allVehicles = []

  for (let i = 1; i <= vehicleCount; i++) {
    const vehicle = await getVehicle(i)
    vehicle.detail !== 'Not found' && allVehicles.push(vehicle)
  }

  return allVehicles
}

export default getAllVehicles