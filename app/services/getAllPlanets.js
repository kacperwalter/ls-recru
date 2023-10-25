import getPlanet from "./getPlanet";

const getAllPlanets = async (planetCount) => {
  const allPlanets = []

  for (let i = 1; i <= planetCount; i++) {
    allPlanets.push(await getPlanet(i))
  }

  return allPlanets
}

export default getAllPlanets