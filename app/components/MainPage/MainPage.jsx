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

  return allCharacters.sort((a, b) => a.name.localeCompare(b.name))
}

const Main = async () => {
  const characters = await getAllCharacters(3)

  return (
    <main>
      <h1>Star Wars Characters</h1>
      <section>
        {characters.map((character, index) => (
          <CharacterCard 
            key={index}
            name={character.name}
          />
        ))}
      </section>
    </main>
  )
}

export default Main