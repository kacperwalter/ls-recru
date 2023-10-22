import ContentCard from "../ContentCard/ContentCard"
import Listing from "../../UI/Listing/Listing"

import getPlanet from "@/app/utils/getPlanet"

import temporaryPlanet from "@/public/temp-planet.webp"

const getAllPlanets = async (planetCount) => {
  const allPlanets = []

  for (let i = 1; i <= planetCount; i++) {
    allPlanets.push(await getPlanet(i))
  }

  return allPlanets
}

const PlanetsPage = async () => {
  const planets = await getAllPlanets(60)

  return (
    <Listing heading="Star Wars Planets">
      {planets.map((planet, index) => (
        <ContentCard
          image={temporaryPlanet}
          key={index}
          id={index}
          data={planet}
        />
      ))}
    </Listing>
  )
}

export default PlanetsPage