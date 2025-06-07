import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders the get started text', () => {
    render(<Home />);
    const text = screen.getByText(/get started by editing/i);
    expect(text).toBeInTheDocument();
  });
}); 