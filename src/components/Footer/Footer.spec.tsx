import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer Component', () => {

  it('should render the company name and address', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /Funiro\./i })).toBeInTheDocument()
    expect(screen.getByText(/400 University Drive Suite 200 Coral Gables,/i)).toBeInTheDocument()
  })

  it('should render navigation links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Shop/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('should render social media icons', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })

  it('should render the newsletter form', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText(/Enter Your Email Address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /SUBSCRIBE/i })).toBeInTheDocument()
  })

  it('should render the copyright text', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    expect(screen.getByText(/2023 funiro. All rights reserved/i)).toBeInTheDocument()
  })
})
