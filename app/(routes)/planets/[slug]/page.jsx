import Sidebar from "@/app/components/Sidebar/Sidebar"
import PlanetPage from "@/app/components/PlanetPage/PlanetPage"

import getPlanet from "@/app/utils/getPlanet"

const Planet = async ({ searchParams }) => {
  const planet = await getPlanet(searchParams.id)

  return (
    <>
      <Sidebar />
      <PlanetPage data={planet}/>
    </>
  )
}

export default Planet