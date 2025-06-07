import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BottomSearchBar from '@/components/layout/BottomSearchBar';

describe('BottomSearchBar', () => {
  it('renders the search input', () => {
    render(<BottomSearchBar />);
    const searchInput = screen.getByPlaceholderText('Search for quotes...');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders filter buttons', () => {
    render(<BottomSearchBar />);
    expect(screen.getByLabelText('Filter by movies')).toBeInTheDocument();
    expect(screen.getByLabelText('Filter by TV shows')).toBeInTheDocument();
    expect(screen.getByLabelText('Show all content')).toBeInTheDocument();
  });

  it('renders voice search and search buttons', () => {
    render(<BottomSearchBar />);
    expect(screen.getByLabelText('Voice search')).toBeInTheDocument();
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    render(<BottomSearchBar />);
    const searchInput = screen.getByPlaceholderText('Search for quotes...') as HTMLInputElement;
    
    fireEvent.change(searchInput, { target: { value: 'test query' } });
    expect(searchInput.value).toBe('test query');
  });

  it('toggles filter selection', () => {
    render(<BottomSearchBar />);
    const movieFilter = screen.getByLabelText('Filter by movies');
    const allFilter = screen.getByLabelText('Show all content');
    
    // All should be active by default
    expect(allFilter).toHaveClass('bg-primary');
    
    // Click movie filter
    fireEvent.click(movieFilter);
    expect(movieFilter).toHaveClass('bg-primary');
    expect(allFilter).not.toHaveClass('bg-primary');
  });

  it('disables search button when input is empty', () => {
    render(<BottomSearchBar />);
    const searchButton = screen.getByLabelText('Search');
    expect(searchButton).toBeDisabled();
  });

  it('enables search button when input has text', () => {
    render(<BottomSearchBar />);
    const searchInput = screen.getByPlaceholderText('Search for quotes...');
    const searchButton = screen.getByLabelText('Search');
    
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchButton).not.toBeDisabled();
  });
}); 