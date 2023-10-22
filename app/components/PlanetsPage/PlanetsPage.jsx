import ContentCard from "../ContentCard/ContentCard"
import Wrapper from "../UI/Wrapper/Wrapper"

import getPlanet from "@/app/utils/getPlanet"

import temporaryPlanet from "@/public/temp-planet.webp"

import '../UI/Listing.scss'

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
    <main className="listing">
      <Wrapper>
        <h1>Star Wars Planets</h1>
        <section>
          {planets.map((planet, index) => (
            <ContentCard
              image={temporaryPlanet}
              key={index}
              id={index}
              data={planet}
            />
          ))}
        </section>
      </Wrapper>
    </main>
  )
}

export default PlanetsPage