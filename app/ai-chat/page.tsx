'use client';

import { useReducer, useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { ChatLayout } from '@/components/ai-chat/ChatLayout';
import { ChatHeader } from '@/components/ai-chat/ChatHeader';
import { ChatInput } from '@/components/ai-chat/ChatInput';
import { ChatFeed, Message } from '@/components/ai-chat/ChatFeed';

// State Definition
interface State {
  input: string;
  messages: Message[];
  isLoading: boolean;
}

type Action = 
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RESET_INPUT' };

const initialState: State = {
  input: '',
  messages: [],
  isLoading: false
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'RESET_INPUT':
      return { ...state, input: '' };
    default:
      return state;
  }
}

export default function AIChatPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.messages]);

  const handleSend = async () => {
    if (!state.input.trim() || state.isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: state.input,
      timestamp: new Date().toISOString()
    };

    dispatch({ type: 'ADD_MESSAGE', payload: userMsg });
    dispatch({ type: 'RESET_INPUT' });
    dispatch({ type: 'SET_LOADING', payload: true });

    // Simulate AI Response
    setTimeout(() => {
        const aiMsg: Message = {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: "Analyzing market data... The $BTC divergence you're seeing is correlated with a sudden spike in stablecoin inflows to major exchanges. My models predict a 65% chance of a volatility breakout within the next 4 hours.",
            timestamp: new Date().toISOString()
        };
        dispatch({ type: 'ADD_MESSAGE', payload: aiMsg });
        dispatch({ type: 'SET_LOADING', payload: false });
    }, 1500);
  };

  return (
    <>
       <div className="absolute top-0 w-full z-50">
          <Navbar />
       </div>
       <ChatLayout>
           {/* If no messages, show Header */}
           {state.messages.length === 0 && <ChatHeader />}

           {/* Chat Feed */}
           <ChatFeed messages={state.messages} />
           <div ref={messagesEndRef} />

           {/* Input Area (Sticky Bottom) */}
           <div className="pb-8 pt-4">
              <ChatInput 
                 input={state.input}
                 setInput={(val) => dispatch({ type: 'SET_INPUT', payload: val })}
                 onSend={handleSend}
                 isLoading={state.isLoading}
              />
           </div>
       </ChatLayout>
    </>
  );
}
