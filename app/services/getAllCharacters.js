import getCharacter from './getCharacter'

const getAllCharacters = async characterCount => {
  const allCharacters = []

  for (let i = 1; i <= characterCount; i++) {
    const character = await getCharacter(i)
    character.detail !== 'Not found' && allCharacters.push(character)
  }
  
  allCharacters.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))

  return allCharacters
}

export default getAllCharacters