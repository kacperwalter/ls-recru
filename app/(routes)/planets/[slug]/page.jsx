import Sidebar from "@/app/common/components/organisms/Sidebar/Sidebar"
import Planet from "@/app/modules/planet/Planet"

const Index = ({ searchParams }) => {
  return (
    <>
      <Sidebar />
      <Planet planetId={searchParams.id} />
    </>
  )
}

export default Index