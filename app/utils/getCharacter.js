const getCharacter = async (id) => {
  const baseUrl = 'https://swapi.dev/api/people/'
  const response = await fetch(`${baseUrl}${id}`)
  const data = await response.json()
  return { ...data, id }
}

export default getCharacter