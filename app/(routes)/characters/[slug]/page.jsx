import Sidebar from "@/app/common/components/organisms/Sidebar/Sidebar"
import Character from "@/app/modules/character/Character"

const Index = ({ searchParams }) => {
  return (
    <>
      <Sidebar />
      <Character characterId={searchParams.id} />
    </>
  )
}

export default Index