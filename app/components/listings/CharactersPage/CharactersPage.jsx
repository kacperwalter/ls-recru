import ContentCard from "../ContentCard/ContentCard"
import Listing from "../../UI/Listing/Listing"

import getCharacter from "@/app/utils/getCharacter"

import temporaryAvatar from "@/public/temp-avatar.jpeg"

const getAllCharacters = async (characterCount) => {
  const allCharacters = []

  for (let i = 1; i <= characterCount; i++) {
    const character = await getCharacter(i)
    character.detail !== 'Not found' && allCharacters.push(character)
  }
  
  allCharacters.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))

  return allCharacters
}

const CharactersPage = async () => {
  const characters = await getAllCharacters(80)

  return (
    <Listing heading="Star Wars Characters">
      {characters.map((character, index) => (
        <ContentCard
          image={temporaryAvatar}
          key={index}
          id={index}
          data={character}
        />
      ))}
    </Listing>
  )
}

export default CharactersPage