'use client';

import { useReducer } from 'react';
import { SearchLayout } from '@/components/ai-search/SearchLayout';
import { SearchBar } from '@/components/ai-search/SearchBar';
import { FilterTags } from '@/components/ai-search/FilterTags';
import { Navbar } from '@/components/Navbar';

interface State {
  query: string;
  activeTag: string;
}

type Action = 
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'SET_TAG'; payload: string };

const initialState: State = {
  query: '',
  activeTag: 'Bullish Sentiment' // Using a default active tag as per prompt inspiration, or maybe 'Crypto'
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_TAG':
      return { ...state, activeTag: action.payload };
    default:
      return state;
  }
}

export default function AISearchPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    console.log("Searching for:", state.query, "with filter:", state.activeTag);
    // Future integration: Trigger AI search
  };

  return (
    <>
      <div className="absolute top-0 w-full z-50">
          <Navbar />
      </div>
      <SearchLayout>
        <div className="flex flex-col items-center text-center z-10 relative">
          
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2">
            <div className="h-px w-8 bg-gray-700" />
            <span className="text-gray-500 uppercase tracking-[0.2em] text-xs font-mono">
              Fintech Intelligence / AI Analysis
            </span>
            <div className="h-px w-8 bg-gray-700" />
          </div>

          {/* Main Heading having serif font */}
          <h1 className="text-4xl md:text-6xl text-white font-serif mb-2 tracking-tight">
            Search Global Markets <br className="hidden md:block" /> & Assets
          </h1>

          <p className="text-gray-500 max-w-lg mt-4 mb-8 font-sans">
             Real-time semantic analysis of institutional flows, social sentiment, and on-chain anomalies.
          </p>

          {/* Search Bar */}
          <SearchBar 
            query={state.query} 
            setQuery={(q) => dispatch({ type: 'SET_QUERY', payload: q })}
            onSubmit={handleSubmit}
          />

          {/* Filter Tags */}
          <FilterTags 
            activeTag={state.activeTag}
            onTagSelect={(t) => dispatch({ type: 'SET_TAG', payload: t })}
          />

        </div>
      </SearchLayout>
    </>
  );
}
