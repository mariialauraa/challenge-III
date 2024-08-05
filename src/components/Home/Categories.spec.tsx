import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Categories from './Categories';

describe('Categories Component', () => {

  it('should render the main heading and description', () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /Browse The Range/i })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./i)).toBeInTheDocument()
  })

  it('should render the category links with images and labels', () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    )

    const diningLink = screen.getByRole('link', { name: /Dining/i })
    const livingLink = screen.getByRole('link', { name: /Living/i })
    const bedroomLink = screen.getByRole('link', { name: /Bedroom/i })

    expect(diningLink).toBeInTheDocument()
    expect(livingLink).toBeInTheDocument()
    expect(bedroomLink).toBeInTheDocument()

    expect(screen.getByAltText('Dining')).toBeInTheDocument()
    expect(screen.getByAltText('Living')).toBeInTheDocument()
    expect(screen.getByAltText('Bedroom')).toBeInTheDocument()

    expect(screen.getByText(/Dining/i)).toBeInTheDocument()
    expect(screen.getByText(/Living/i)).toBeInTheDocument()
    expect(screen.getByText(/Bedroom/i)).toBeInTheDocument()
  })
})