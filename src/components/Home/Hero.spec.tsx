import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import Hero from './Hero';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

describe('Hero Component', () => {
  it('should render the hero content correctly', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    )

    expect(screen.getByAltText('living room')).toBeInTheDocument()
    expect(screen.getByText(/New Arrival/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Discover Our New Collection/i })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /BUY NOW/i })).toBeInTheDocument()
  })

  it('should navigate to /shop when "BUY NOW" button is clicked', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate)

    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    )

    const buyNowButton = screen.getByRole('button', { name: /BUY NOW/i })
    fireEvent.click(buyNowButton)

    expect(mockNavigate).toHaveBeenCalledWith('/shop')
  })
})
