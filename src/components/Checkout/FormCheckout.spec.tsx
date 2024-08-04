import { render, screen, fireEvent } from '@testing-library/react';
import FormCheckout from './FormCheckout';
import { useCheckoutForms } from "../../hooks/useCheckoutForms";

jest.mock("../../hooks/useCheckoutForms")

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ 
      logradouro: 'Rua', 
      bairro: 'Bairro', 
      localidade: 'Cidade', 
      uf: 'Estado' 
    }),
  })
) as jest.Mock

describe('FormCheckout Component', () => {
  const mockUseCheckoutForms = useCheckoutForms as jest.Mock

  beforeEach(() => {
    mockUseCheckoutForms.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      errors: {},
      reset: jest.fn(),
      setValue: jest.fn(),
      trigger: jest.fn(),
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch address when zip code is entered', async () => {
    render(<FormCheckout onSubmit={jest.fn()} />)

    const zipCodeInput = screen.getByLabelText('ZIP code')
    fireEvent.keyDown(zipCodeInput, { key: 'Enter', target: { value: '12345678' } })

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith('https://viacep.com.br/ws/12345678/json/')
  })

  it('should render all form fields correctly', () => {
    render(<FormCheckout onSubmit={jest.fn()} />)

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/ZIP code/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Country \/ Region/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Street address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Town \/ City/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Province/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Add-on address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Additional information/i)).toBeInTheDocument()
  })

  it('should display error messages when fields are invalid', () => {
    mockUseCheckoutForms.mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      errors: {
        firstName: { message: 'First name is required' },
        lastName: { message: 'Last name is required' },
        zipCode: { message: 'ZIP code is required' },
      },
      reset: jest.fn(),
      setValue: jest.fn(),
      trigger: jest.fn(),
    })

    render(<FormCheckout onSubmit={jest.fn()} />)

    expect(screen.getByText('First name is required')).toBeInTheDocument()
    expect(screen.getByText('Last name is required')).toBeInTheDocument()
    expect(screen.getByText('ZIP code is required')).toBeInTheDocument()
  })
})
