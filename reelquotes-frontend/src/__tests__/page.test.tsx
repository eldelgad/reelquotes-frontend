import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

describe('Home', () => {
  it('renders the quote display', () => {
    render(<Home />);
    const quote = screen.getByText(/May the Force be with you/i);
    expect(quote).toBeInTheDocument();
  });

  it('renders the quote source', () => {
    render(<Home />);
    const source = screen.getByText(/Star Wars: A New Hope/i);
    expect(source).toBeInTheDocument();
  });

  it('renders the timestamp', () => {
    render(<Home />);
    const timestamp = screen.getByText(/01:58:42/i);
    expect(timestamp).toBeInTheDocument();
  });

  it('renders the info button', () => {
    render(<Home />);
    const infoButton = screen.getByLabelText(/More information about this quote/i);
    expect(infoButton).toBeInTheDocument();
  });
}); 