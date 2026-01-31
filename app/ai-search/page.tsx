'use client';

import { useReducer, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchLayout } from '@/components/ai-search/SearchLayout';
import { SearchBar } from '@/components/ai-search/SearchBar';
import { FilterTags } from '@/components/ai-search/FilterTags';
import { SearchResults } from '@/components/ai-search/SearchResults';
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
  activeTag: 'Bullish Sentiment' 
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get('q');
  
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sync state with URL
  useEffect(() => {
    if (urlQuery) {
        dispatch({ type: 'SET_QUERY', payload: urlQuery });
    }
  }, [urlQuery]);

  const handleSubmit = () => {
    if (state.query.trim()) {
        router.push(`/ai-search?q=${encodeURIComponent(state.query)}`);
    }
  };

  return (
    <>
      <div className="absolute top-0 w-full z-50">
          <Navbar />
      </div>
      <SearchLayout className={urlQuery ? "items-start pt-32 h-auto min-h-screen" : "pt-28"}>
        <div className="flex flex-col items-center text-center z-10 relative w-full transition-all duration-500">
          
          {/* Header Section - Compact if searching */}
          <div className={`transition-all duration-500 ${urlQuery ? 'mb-8 scale-90' : 'mb-2'}`}>
              <div className="mb-4 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-gray-700" />
                <span className="text-gray-500 uppercase tracking-[0.2em] text-xs font-mono">
                  Fintech Intelligence / AI Analysis
                </span>
                <div className="h-px w-8 bg-gray-700" />
              </div>

              {!urlQuery && (
                  <>
                    <h1 className="text-4xl md:text-6xl text-white font-serif mb-2 tracking-tight">
                        Search Global Markets <br className="hidden md:block" /> & Assets
                    </h1>
                    <p className="text-gray-500 max-w-lg mx-auto mt-4 mb-8 font-sans">
                        Real-time semantic analysis of institutional flows, social sentiment, and on-chain anomalies.
                    </p>
                  </>
              )}
          </div>

          {/* Search Bar - Always Visible */}
          <div className="w-full flex flex-col items-center">
             <SearchBar 
                query={state.query} 
                setQuery={(q) => dispatch({ type: 'SET_QUERY', payload: q })}
                onSubmit={handleSubmit}
             />
             
             {/* Filter Tags - Only show if NO results to avoid clutter */}
             {!urlQuery && (
                 <FilterTags 
                    activeTag={state.activeTag}
                    onTagSelect={(t) => dispatch({ type: 'SET_TAG', payload: t })}
                 />
             )}
          </div>

          {/* Results Grid - Show if URL Query exists */}
          {urlQuery && <SearchResults query={urlQuery} />}

        </div>
      </SearchLayout>
    </>
  );
}
