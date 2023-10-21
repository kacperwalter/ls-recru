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

  allCharacters.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })

  return allCharacters
}

const Main = async () => {
  const characters = await getAllCharacters(80)

  return (
    <main>
      <h1>Star Wars Characters</h1>
      <section>
        {characters.map((character, index) => (
          <CharacterCard 
            key={index}
            data={character}
          />
        ))}
      </section>
    </main>
  )
}

export default Main