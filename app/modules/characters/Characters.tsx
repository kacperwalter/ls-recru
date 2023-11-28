import Listing from "@/app/common/components/organisms/Listing/Listing"
import Card from "@/app/common/components/organisms/Card/Card"

import getAllElements from "@/app/services/getAllElements"

import temporaryAvatar from "@/public/temp-avatar.jpeg"
interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  id: number;
}

const Characters = async () => {
  const characters = await getAllElements("characters", 80)

  return (
    <Listing
      heading="Star Wars Characters"
      headingType="h1"
      caption="List of Star Wars Characters"
    >
      {characters.map((character: Character, index: number) => (
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