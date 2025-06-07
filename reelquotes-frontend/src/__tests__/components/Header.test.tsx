import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/layout/Header';

describe('Header', () => {
  it('renders the ReelQuotes logo', () => {
    render(<Header />);
    expect(screen.getByText('ReelQuotes')).toBeInTheDocument();
  });

  it('renders the hamburger menu button', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Open menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('renders the Browse Titles link on desktop', () => {
    render(<Header />);
    expect(screen.getByText('Browse Titles')).toBeInTheDocument();
  });

  it('renders the theme toggle button', () => {
    render(<Header />);
    const themeButton = screen.getByLabelText(/Switch to (light|dark) mode/);
    expect(themeButton).toBeInTheDocument();
  });

  it('toggles theme when theme button is clicked', () => {
    render(<Header />);
    const themeButton = screen.getByLabelText(/Switch to (light|dark) mode/);
    
    // Initial state should show moon icon (light mode)
    expect(themeButton).toHaveAttribute('aria-label', 'Switch to dark mode');
    
    // Click to toggle to dark mode
    fireEvent.click(themeButton);
    
    // Should now show sun icon (dark mode)
    expect(themeButton).toHaveAttribute('aria-label', 'Switch to light mode');
  });
}); 