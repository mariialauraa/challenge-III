import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RelatedProducts from './RelatedProducts';
import { useProducts } from '../../hooks/useProducts';

jest.mock('../../hooks/useProducts')

const mockUseProducts = useProducts as jest.Mock

describe('RelatedProducts Component', () => {
  beforeEach(() => {
    mockUseProducts.mockReturnValue({
      getSingleProduct: jest.fn().mockReturnValue({
        id: 1,
        title: 'Produto',
        category: 'Categoria',
        description: { short: 'Descricao curta.' },
        images: { mainImage: 'img1.jpg' },
        salePrice: 50.0,
      }),
      products: [
        {
          id: 2,
          title: 'Related Product 1',
          category: 'Categoria',
          description: { short: 'Descricao curta.' },
          images: { mainImage: 'img2.jpg' },
          salePrice: 100.0,
        },
        {
          id: 3,
          title: 'Related Product 2',
          category: 'Categoria',
          description: { short: 'Descricao curta.' },
          images: { mainImage: 'img3.jpg' },
          salePrice: 150.0,
        },
      ],
    })
  })

  it('should render related products', () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Routes>
          <Route path="/product/:id" element={<RelatedProducts />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Related Products')).toBeInTheDocument()
    expect(screen.getByText('Related Product 1')).toBeInTheDocument()
    expect(screen.getByText('Related Product 2')).toBeInTheDocument()
  })

  it('should show "Product not found" if product ID is invalid', () => {
    mockUseProducts.mockReturnValueOnce({
      getSingleProduct: jest.fn().mockReturnValue(null),
      products: [],
    })

    render(
      <MemoryRouter initialEntries={['/product/999']}>
        <Routes>
          <Route path="/product/:id" element={<RelatedProducts />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Product not found')).toBeInTheDocument()
  })
})
