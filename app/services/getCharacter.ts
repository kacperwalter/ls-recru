import API from '../constants/api'

const getCharacter = async (id: number) => {
  const response = await fetch(`${API.PROD_API_URL}/people/${id}`)
  const data = await response.json()
  return { ...data, id }
}

export default getCharacter