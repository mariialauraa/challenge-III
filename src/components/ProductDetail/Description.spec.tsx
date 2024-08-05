import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Description from './Description';
import { useProducts } from '../../hooks/useProducts';

jest.mock('../../hooks/useProducts')

const mockUseProducts = useProducts as jest.Mock

describe('Description Component', () => {
  beforeEach(() => {
    mockUseProducts.mockReturnValue({
      getSingleProduct: jest.fn().mockReturnValue({
        id: 1,
        title: 'Produto 1',
        description: {
          long: 'Uma descricao longa do produto.'
        },
        images: {
          gallery: ['img1.jpg', 'img2.jpg']
        }
      }),
    })
  })

  it('should render the product description and images', () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route path="/product/:id" element={<Description />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /Description/i })).toBeInTheDocument()
    expect(screen.getByText('Uma descricao longa do produto.')).toBeInTheDocument()

    const images = screen.getAllByRole('img')

    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', 'img1.jpg')
    expect(images[1]).toHaveAttribute('src', 'img2.jpg')
  })

  it('should switch to the "Additional Information" tab', () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route path="/product/:id" element={<Description />} />
        </Routes>
      </MemoryRouter>
    )

    fireEvent.click(screen.getByRole('heading', { name: /Additional Information/i }))
    
    expect(screen.getByText(/Embodying the raw, wayward spirit of rock n roll/i)).toBeInTheDocument()
  })

  it('should display "Product not found" if product id is invalid', () => {
    mockUseProducts.mockReturnValueOnce({
      getSingleProduct: jest.fn().mockReturnValue(null),
    })

    render(
      <MemoryRouter initialEntries={['/product/999']}>
        <Routes>
          <Route path="/product/:id" element={<Description />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Product not found')).toBeInTheDocument()
  })
})