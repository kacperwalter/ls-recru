const getCharacter = async id => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  const data = await response.json()
  return { ...data, id }
}

export default getCharacter