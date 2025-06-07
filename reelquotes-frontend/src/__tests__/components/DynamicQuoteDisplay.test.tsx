import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DynamicQuoteDisplay from '@/features/quote-display/components/DynamicQuoteDisplay';

describe('DynamicQuoteDisplay', () => {
  it('renders the hardcoded Star Wars quote', () => {
    render(<DynamicQuoteDisplay />);
    const quote = screen.getByText(/May the Force be with you/i);
    expect(quote).toBeInTheDocument();
  });

  it('renders the quote source', () => {
    render(<DynamicQuoteDisplay />);
    const source = screen.getByText(/Star Wars: A New Hope/i);
    expect(source).toBeInTheDocument();
  });

  it('renders the character name', () => {
    render(<DynamicQuoteDisplay />);
    const character = screen.getByText(/General Dodonna/i);
    expect(character).toBeInTheDocument();
  });

  it('renders the timestamp', () => {
    render(<DynamicQuoteDisplay />);
    const timestamp = screen.getByText(/01:58:42/i);
    expect(timestamp).toBeInTheDocument();
  });

  it('renders the info button', () => {
    render(<DynamicQuoteDisplay />);
    const infoButton = screen.getByLabelText(/More information about this quote/i);
    expect(infoButton).toBeInTheDocument();
  });

  it('handles info button click', () => {
    // Mock console.log to test the click handler
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<DynamicQuoteDisplay />);
    const infoButton = screen.getByLabelText(/More information about this quote/i);
    
    fireEvent.click(infoButton);
    
    expect(consoleSpy).toHaveBeenCalledWith(
      'Info clicked for quote:',
      expect.objectContaining({
        text: 'May the Force be with you.',
        source: 'Star Wars: A New Hope',
        timestamp: '01:58:42',
        character: 'General Dodonna'
      })
    );
    
    consoleSpy.mockRestore();
  });

  it('uses proper semantic HTML structure', () => {
    render(<DynamicQuoteDisplay />);
    
    // Check for blockquote element
    const blockquote = document.querySelector('blockquote');
    expect(blockquote).toBeInTheDocument();
    expect(blockquote).toHaveTextContent('May the Force be with you.');
    
    // Check for time element
    const timeElement = document.querySelector('time');
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveTextContent('01:58:42');
  });

  it('has proper accessibility attributes', () => {
    render(<DynamicQuoteDisplay />);
    const infoButton = screen.getByLabelText(/More information about this quote/i);
    
    expect(infoButton).toHaveAttribute('aria-label', 'More information about this quote');
    expect(infoButton).toHaveAttribute('title', 'More information');
  });
}); 