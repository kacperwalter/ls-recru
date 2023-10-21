import CharacterCard from "../UI/CharacterCard/CharacterCard"

const getCharacter = async (characterID) => {
  const baseUrl = 'https://swapi.dev/api/people/'
  const response = await fetch(`${baseUrl}${characterID}`)
  const data = await response.json()
  return data
}

const getAllCharacters = async (characterCount) => {
  const allCharacters = []

  for (let i = 1; i <= characterCount; i++) {
    allCharacters.push(await getCharacter(i))
  }

  return allCharacters
}

const Main = async () => {
  const characters = await getAllCharacters(82)

  return (
    <main>
      <h1>Star Wars Characters</h1>
      <section>
        {characters.map(character => (
          <CharacterCard 
            key={character.name}
            name={character.name}
          />
        ))}
      </section>
    </main>
  )
}

export default Main