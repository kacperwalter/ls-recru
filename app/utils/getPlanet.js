const getPlanet = async (id) => {
  const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
  const data = await response.json()
  return { ...data, id }
}

export default getPlanet