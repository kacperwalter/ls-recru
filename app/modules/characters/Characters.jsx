import getAllCharacters from "@/app/services/getAllCharacters"
import Listing from "@/app/common/components/organisms/Listing/Listing"
import Card from "@/app/common/components/organisms/Card/Card"

import temporaryAvatar from "@/public/temp-avatar.jpeg"

const Characters = async () => {
  const characters = await getAllCharacters(10)

  return (
    <Listing heading="Star Wars Characters">
      {characters.map((character, index) => (
        <Card
          image={temporaryAvatar}
          key={index}
          id={index}
          data={character}
        />
      ))}
    </Listing>
  )
}

export default Characters