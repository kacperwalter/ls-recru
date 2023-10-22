import Sidebar from "@/app/components/Sidebar/Sidebar"
import CharacterPage from "@/app/components/CharacterPage/CharacterPage"

import getCharacter from "@/app/utils/getCharacter"

const Character = async ({ searchParams }) => {
  const character = await getCharacter(searchParams.id)
  
  return (
    <>
      <Sidebar />
      <CharacterPage data={character} />
    </>
  )
}

export default Character