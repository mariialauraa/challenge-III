import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormContact from './FormContact';
import { useContactForms } from '../../hooks/useContactForms';

jest.mock('../../hooks/useContactForms')

describe('FormContact Component', () => {
  const mockUseContactForms = useContactForms as jest.Mock

  beforeEach(() => {
    mockUseContactForms.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      errors: {},
      reset: jest.fn(),
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render all form fields correctly', () => {
    render(<FormContact />)

    expect(screen.getByLabelText(/Your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('should display error messages when fields are invalid', () => {
    mockUseContactForms.mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      errors: {
        name: { message: 'Name is required' },
        email: { message: 'Email is required' },
        message: { message: 'Message is required' },
      },
      reset: jest.fn(),
    })

    render(<FormContact />)

    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('should call onSubmit and reset form when submitted', async () => {
    const mockReset = jest.fn()
    mockUseContactForms.mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn((fn) => fn),
      errors: {},
      reset: mockReset,
    });

    render(<FormContact />)

    fireEvent.input(screen.getByLabelText(/Your name/i), { target: { value: 'Maria' } })
    fireEvent.input(screen.getByLabelText(/Email address/i), { target: { value: 'test@test.com' } })
    fireEvent.input(screen.getByLabelText(/Subject/i), { target: { value: 'Texto' } })
    fireEvent.input(screen.getByLabelText(/Message/i), { target: { value: 'Mensagem de texto.' } })

    fireEvent.submit(screen.getByRole('button', { name: /Submit/i }))

    await waitFor(() => {
      expect(mockReset).toHaveBeenCalled()
      expect(screen.getByText('Formulário enviado com sucesso!')).toBeInTheDocument()
    })

    await waitFor(
      () => {
        expect(screen.queryByText('Formulário enviado com sucesso!')).not.toBeInTheDocument()
      },
      { timeout: 5000 }
    )
  })
})
