import getCharacter from './getCharacter'
import getPlanet from './getPlanet'
import getVehicle from './getVehicle'

const getAllElements = async (type, count) => {
  const allData = []

  const fetchData = async i => {
    switch (type) {
      case 'characters':
        return await getCharacter(i)
      case 'planets':
        return await getPlanet(i)
      case 'vehicles':
        return await getVehicle(i)
      default:
        return {}
    }
  }

  for (let i = 1; i <= count; i++) {
    const data = await fetchData(i)
    data.detail !== 'Not found' && allData.push(data)
  }

  type === 'characters' && allData.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))

  return allData
}