import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/layout/Header';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Header', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    document.documentElement.classList.remove('dark');
  });
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
    // Mock no saved theme (defaults to light mode)
    localStorageMock.getItem.mockReturnValue(null);
    
    render(<Header />);
    const themeButton = screen.getByLabelText(/Switch to (light|dark) mode/);
    
    // Initial state should show moon icon (light mode)
    expect(themeButton).toHaveAttribute('aria-label', 'Switch to dark mode');
    
    // Click to toggle to dark mode
    fireEvent.click(themeButton);
    
    // Should now show sun icon (dark mode)
    expect(themeButton).toHaveAttribute('aria-label', 'Switch to light mode');
    
    // Should save theme to localStorage
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
    
    // Should add dark class to document
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('initializes theme from localStorage', () => {
    // Mock saved dark theme
    localStorageMock.getItem.mockReturnValue('dark');
    
    render(<Header />);
    const themeButton = screen.getByLabelText(/Switch to (light|dark) mode/);
    
    // Should show sun icon (dark mode active)
    expect(themeButton).toHaveAttribute('aria-label', 'Switch to light mode');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
}); 