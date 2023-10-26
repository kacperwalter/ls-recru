import { PROD_API_URL } from "@/app/constants/api"

const getPlanet = async id => {
  const response = await fetch(`${PROD_API_URL}/planets/${id}/`)
  const data = await response.json()
  return { ...data, id }
}

export default getPlanet