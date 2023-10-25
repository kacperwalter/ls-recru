import Listing from "@/app/common/components/organisms/Listing/Listing"
import Card from "@/app/common/components/organisms/Card/Card"

import getAllElements from "@/app/services/getAllElements"

import temporaryPlanetImage from "@/public/temp-planet.webp"

const Planets = async () => {
  const planets = await getAllElements("planets", 60)

  return (
    <Listing 
      heading="Star Wars Planets" 
      headingType="h1"
      caption="List Planets that appear in Star Wars"
    >
      {planets.map((planet, index) => (
        <Card
          image={temporaryPlanetImage}
          key={index}
          id={index}
          data={planet}
        />
      ))}
    </Listing>
  )
}

export default Planets