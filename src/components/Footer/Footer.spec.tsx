import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
    test('renders company name and address', () => {
        render(<Footer />)

        expect(screen.getByRole('heading', { name: /Funiro\./i })).toBeInTheDocument()
        expect(screen.getByText(/400 University Drive Suite 200 Coral Gables,/i)).toBeInTheDocument()
    })

    test('renders navigation links', () => {
        render(<Footer />)
        
        expect(screen.getByText(/Home/i)).toBeInTheDocument()
        expect(screen.getByText(/Shop/i)).toBeInTheDocument()
        expect(screen.getByText(/About/i)).toBeInTheDocument()
        expect(screen.getByText(/Contact/i)).toBeInTheDocument()
    })

    test('renders social media icons', () => {
        render(<Footer />)

        expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    })

    test('renders newsletter form', () => {
        render(<Footer />)

        expect(screen.getByPlaceholderText(/Enter Your Email Address/i)).toBeInTheDocument()
        expect(screen.getByText(/SUBSCRIBE/i)).toBeInTheDocument()
    })

    test('renders copyright text', () => {
        render(<Footer />)
        expect(screen.getByText(/2023 funiro. All rights reserved/i)).toBeInTheDocument()
    })
})
