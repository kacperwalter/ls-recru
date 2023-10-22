import CharacterCard from "../CharacterCard/CharacterCard"
import Wrapper from "../UI/Wrapper/Wrapper"

import './MainPage.scss'

import getCharacter from "@/app/utils/getCharacter"

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

const MainPage = async () => {
  const characters = await getAllCharacters(80)

  return (
    <main className="main-page">
      <Wrapper>
        <h1>Star Wars Characters</h1>
        <section>
          {characters.map((character, index) => (
            <CharacterCard 
              key={index}
              id={index}
              data={character}
            />
          ))}
        </section>
      </Wrapper>
    </main>
  )
}

export default MainPage