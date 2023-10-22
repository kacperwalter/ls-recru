import CharacterCard from "../CharacterCard/CharacterCard"
import Wrapper from "../UI/Wrapper/Wrapper"

import './PlanetsPage.scss'

const PlanetsPage = () => {
  return (
    <main className="planets-page">
      <Wrapper>
        <h1>Star Wars Planets</h1>
        <section>
          {/* {characters.map((character, index) => (
            <CharacterCard 
              key={index}
              id={index}
              data={character}
            />
          ))} */}
        </section>
      </Wrapper>
    </main>
  )
}

export default PlanetsPage