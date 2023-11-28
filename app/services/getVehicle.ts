import API from '../constants/api'

const getVehicle = async (id: number) => {
  const response = await fetch(`${API.PROD_API_URL}/vehicles/${id}/`);
  const data = await response.json()
  return { ...data, id }
}

export default getVehicle