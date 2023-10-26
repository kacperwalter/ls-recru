import { PROD_API_URL } from "@/app/constants/api"

const getCharacter = async id => {
  const response = await fetch(`${PROD_API_URL}/people/${id}`)
  const data = await response.json()
  return { ...data, id }
}

export default getCharacter