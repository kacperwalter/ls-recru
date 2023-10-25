import Listing from "@/app/common/components/organisms/Listing/Listing"
import Card from "@/app/common/components/organisms/Card/Card"

import getAllElements from "@/app/services/getAllElements"

import temporaryAvatar from "@/public/temp-avatar.jpeg"

const Characters = async () => {
  const characters = await getAllElements("characters", 10)

  return (
    <Listing 
      heading="Star Wars Characters" 
      headingType="h1"
      caption="List of Star Wars Characters"
    >
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