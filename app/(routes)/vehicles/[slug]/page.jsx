import Sidebar from "@/app/components/Sidebar/Sidebar"
import VehiclePage from "@/app/components/VehiclePage/VehiclePage"

import getVehicle from "@/app/utils/getVehicle"

const Vehicle = async ({ searchParams }) => {
  const vehicle = await getVehicle(searchParams.id)

  return (
    <>
      <Sidebar />
      <VehiclePage data={vehicle}/>
    </>
  )
}

export default Vehicle