import React from 'react';
import DynamicQuoteDisplay from '@/features/quote-display/components/DynamicQuoteDisplay';

export default function Home() {
  return (
    <div className="h-full relative">
      <DynamicQuoteDisplay />
    </div>
  );
} 