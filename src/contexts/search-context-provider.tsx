"use client";

import { createContext, useState } from "react";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchQuery: string;
  handleChangeSearchQuery: (newValue: string) => void;
};

// Create context
export const SearchContext = createContext<TSearchContext | null>(null);

// Context component
export default function SearchContextProvider({
  children,
}: SearchContextProviderProps) {
  // State
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state

  // Event handlers / actions
  const handleChangeSearchQuery = (newValue: string) => {
    setSearchQuery(newValue);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleChangeSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
