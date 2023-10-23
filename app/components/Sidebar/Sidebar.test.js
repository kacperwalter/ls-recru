/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import Sidebar from './Sidebar'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/characters'),
}))

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/characters',
  }),
}))

describe('Sidebar', () => {
  it('should render the Sidebar component', () => {
    const { getByText } = render(<Sidebar />)
  
    expect(getByText('Characters')).toBeTruthy()
    expect(getByText('Planets')).toBeTruthy()
    expect(getByText('Vehicles')).toBeTruthy()
  });

  it('should mark "Characters" link as active when on the characters page', () => {
    const { getByText } = render(<Sidebar />);
    
    const charactersLink = getByText('Characters')
    const classList = charactersLink.className.split(' ')

    expect(classList).toContain('sidebar__link--active')
  });

  it('should not mark "Planets" and "Vehicles" links as active on the characters page', () => {
    const { getByText } = render(<Sidebar />)
    
    const planetsClassList =  getByText('Planets').className.split(' ')
    const vehiclesClassList = getByText('Vehicles').className.split(' ')

    expect(planetsClassList).not.toContain('sidebar__link--active')
    expect(vehiclesClassList).not.toContain('sidebar__link--active')
  });
});