import API from '../constants/api'

const getPlanet = async (id: number) => {
  const response = await fetch(`${API.PROD_API_URL}/planets/${id}/`)
  const data = await response.json()
  return { ...data, id }
}

export default getPlanet