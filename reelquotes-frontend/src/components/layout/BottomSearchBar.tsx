"use client";

import React from "react";
import { Search, Mic, Film, Tv } from "lucide-react";

export default function BottomSearchBar() {
  const [query, setQuery] = React.useState("");
  const [activeFilter, setActiveFilter] = React.useState<"all" | "movie" | "tvshow">("all");

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Searching for:", query, "with filter:", activeFilter);
      // TODO: Implement actual search functionality
    }
  };

  const handleSpeechToText = () => {
    console.log("Speech-to-text activated");
    // TODO: Implement speech-to-text functionality
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 bg-input border border-border rounded-full p-2">
          {/* Text Input */}
          <div className="flex-1 flex items-center gap-2 px-3">
            <input
              type="text"
              placeholder="Search for quotes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
            />
            
            {/* Filter Buttons */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveFilter("movie")}
                className={`p-2 rounded-md transition-colors ${
                  activeFilter === "movie"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label="Filter by movies"
                title="Movies"
              >
                <Film className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => setActiveFilter("tvshow")}
                className={`p-2 rounded-md transition-colors ${
                  activeFilter === "tvshow"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label="Filter by TV shows"
                title="TV Shows"
              >
                <Tv className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  activeFilter === "all"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
                aria-label="Show all content"
                title="All"
              >
                All
              </button>
            </div>
          </div>
          
          {/* Speech-to-Text Button */}
          <button
            onClick={handleSpeechToText}
            className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors"
            aria-label="Voice search"
            title="Voice search"
          >
            <Mic className="h-5 w-5" />
          </button>
          
          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
            disabled={!query.trim()}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 