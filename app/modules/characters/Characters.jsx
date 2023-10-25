import getAllCharacters from "@/app/services/getAllCharacters"
import Listing from "@/app/common/components/organisms/Listing/Listing"

const Characters = async () => {
  const characters = await getAllCharacters(10)

  return (
    <Listing heading="Star Wars Characters">
      <ul>
        {characters.map(character => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </Listing>
  )
}

export default Characters