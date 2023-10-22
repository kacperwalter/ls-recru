const getVehicle = async (id) => {
  const response = await fetch(`https://swapi.dev/api/vehicles/${id}/`);
  const data = await response.json()
  return { ...data, id }
}

export default getVehicle