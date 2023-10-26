import Sidebar from "@/app/common/components/organisms/Sidebar/Sidebar"
import Vehicle from "@/app/modules/vehicle/Vehicle"

const Index = ({ searchParams }) => {
  return (
    <>
      <Sidebar />
      <Vehicle vehicleId={searchParams.id} />
    </>
  )
}

export default Index