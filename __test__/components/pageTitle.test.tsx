import { render, screen } from '@testing-library/react';
import PageTitle from '@components/pageTitle';
import '@testing-library/jest-dom';

describe('PageTitle', () => {
  it('renders a heading', () => {
    const content = "This is a page title"
    render(<PageTitle content={content} />)

    const heading = screen.getByRole('heading', {name: content})

    expect(heading).toBeInTheDocument()
  })
})