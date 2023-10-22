import ContentCard from "../ContentCard/ContentCard"
import Wrapper from "../UI/Wrapper/Wrapper"

import './MainPage.scss'

import getCharacter from "@/app/utils/getCharacter"

import temporaryAvatar from "@/public/temp-avatar.jpeg"

const getAllCharacters = async (characterCount) => {
  const allCharacters = []

  for (let i = 1; i <= characterCount; i++) {
    const character = await getCharacter(i)
    if (character.detail !== 'Not found') {
      allCharacters.push(character)
    }
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
            <ContentCard
              image={temporaryAvatar}
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