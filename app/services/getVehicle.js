import { PROD_API_URL } from "@/app/constants/api"

const getVehicle = async id => {
  const response = await fetch(`${PROD_API_URL}/vehicles/${id}/`);
  const data = await response.json()
  return { ...data, id }
}

export default getVehicle