import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import useAuth from '../../hooks/useAuth';
import { useProducts } from '../../hooks/useProducts';

jest.mock('../../hooks/useAuth')
jest.mock('../../hooks/useProducts')

jest.mock('../Auth/firebaseConfig.ts', () => ({
  auth: {
    currentUser: null,
  },
}))

const mockUseAuth = useAuth as jest.Mock
const mockUseProducts = useProducts as jest.Mock

describe('Header Component', () => {

  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      logout: jest.fn(),
    })

    mockUseProducts.mockReturnValue({
      cart: [],
    })
  })

  it('should render navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Shop/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('should display the correct cart count', () => {
    mockUseProducts.mockReturnValueOnce({
      cart: [{ id: 1 }, { id: 2 }],
    })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const cartBadge = screen.getByText('2')
    expect(cartBadge).toBeInTheDocument()
  })
})
