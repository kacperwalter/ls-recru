import Image from 'next/image'

import Wrapper from '../UI/Wrapper/Wrapper'

import './PlanetPage.scss'

import temporaryPlanet from "@/public/temp-planet.webp"

const PlanetPage = ({ data: { name, population, residents }}) => {
  return (
    <main className="planet-page">
      <Wrapper>
        <Image src={temporaryPlanet} alt={name} />
        <h1>Planet name: {name}</h1>
        <p>Population: {population}</p>
        <p>Known residents: {residents}</p>
      </Wrapper>
    </main>
  )
}

export default PlanetPage