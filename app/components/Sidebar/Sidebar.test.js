/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/characters'),
}));
jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/characters',
  }),
}));

describe('Sidebar', () => {
  it('should render the Sidebar component', () => {
    const { getByText } = render(<Sidebar />);
    
    expect(getByText('Characters')).toBeTruthy();
    expect(getByText('Planets')).toBeTruthy();
    expect(getByText('Vehicles')).toBeTruthy();
  });
});