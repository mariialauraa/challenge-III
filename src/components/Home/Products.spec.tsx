import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Products from './Products';

describe('Products Component', () => {

  it('should render the title and "Show More" button', async () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /Our Products/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Show More/i })).toBeInTheDocument()
  })

  it('should navigate to the /shop page when "Show More" button is clicked', () => {
    render(
      <MemoryRouter>
        <Products />
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: /Show More/i })
    expect(link).toHaveAttribute('href', '/shop')
  })
})
