import { render, screen } from '@testing-library/react';
import Pictures from './Pictures';

describe('Pictures Component', () => {

  it('should render the setup sharing message and hashtag', () => {
    render(<Pictures />)

    expect(screen.getByText(/Share your setup with/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /#FuniroFurniture/i })).toBeInTheDocument()
  })

  it('should render the image with the correct alt text', () => {
    render(<Pictures />)

    expect(screen.getByAltText('Home Pictures')).toBeInTheDocument()
  })
})