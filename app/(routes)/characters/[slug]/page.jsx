import Sidebar from "@/app/components/Sidebar/Sidebar"

import getCharacter from "@/app/utils/getCharacter"

const Character = async ({ searchParams }) => {
  const character = await getCharacter(searchParams.id)
  console.log(character)
  
  return (
    <>
      <Sidebar />
      character
    </>
  )
}

export default Character