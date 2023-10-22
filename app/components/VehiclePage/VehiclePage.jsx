import Image from 'next/image'

import Wrapper from '../UI/Wrapper/Wrapper'

import temporaryVehicle from "@/public/temp-vehicle.png"

import splitId from '@/app/utils/splitId'
import getCharacter from '@/app/utils/getCharacter'

import './VehiclePage.scss'

const VehiclePage = async ({ data: { name, vehicle_class, pilots } }) => {
  console.log(pilots)
  const pilotsData = await Promise.all(pilots.map(pilot => getCharacter(splitId(pilot))))

  return (
    <main className="vehicle-page">
      <Wrapper>
        <Image className="vehicle-page__image" src={temporaryVehicle} alt="vehicle" />
        <h1>Vehicle name: {name}</h1>
        <p>Vehicle class: {vehicle_class}</p>

        {pilots.length > 0 && (
          <div>
            <p>Known pilots: </p>
            <ul>
              {pilotsData.map((pilot, index) => <li key={index}>{pilot.name}</li>)}
            </ul>
         </div>
        )}
      </Wrapper>
    </main>
  )
}

export default VehiclePage