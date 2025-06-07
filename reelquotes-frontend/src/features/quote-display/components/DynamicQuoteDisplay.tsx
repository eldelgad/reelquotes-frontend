"use client";

import React from "react";
import { Info } from "lucide-react";

interface Quote {
  text: string;
  source: string;
  timestamp: string;
  character?: string;
}

export default function DynamicQuoteDisplay() {
  // Hardcoded example quote for this story
  const quote: Quote = {
    text: "May the Force be with you.",
    source: "Star Wars: A New Hope",
    timestamp: "01:58:42",
    character: "General Dodonna"
  };

  const handleInfoClick = () => {
    console.log("Info clicked for quote:", quote);
    // TODO: Open quote detail modal
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote Display */}
        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-relaxed">
          &ldquo;{quote.text}&rdquo;
        </blockquote>
        
        {/* Attribution Section */}
        <div className="flex items-center justify-between text-muted-foreground">
          {/* Left: Source and Character */}
          <div className="text-left">
            <div className="text-lg md:text-xl font-semibold text-primary">
              {quote.source}
            </div>
            {quote.character && (
              <div className="text-sm md:text-base mt-1">
                {quote.character}
              </div>
            )}
          </div>
          
          {/* Right: Timestamp and Info Icon */}
          <div className="flex items-center gap-3">
            <time className="text-sm md:text-base font-mono">
              {quote.timestamp}
            </time>
            <button
              onClick={handleInfoClick}
              className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-full transition-colors"
              aria-label="More information about this quote"
              title="More information"
            >
              <Info className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Decorative Quote Marks */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="text-[20rem] font-serif text-primary/20 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
            &ldquo;
          </div>
          <div className="text-[20rem] font-serif text-primary/20 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rotate-180">
            &rdquo;
          </div>
        </div>
      </div>
    </div>
  );
} 