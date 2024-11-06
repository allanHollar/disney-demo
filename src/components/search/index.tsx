import React from "react";

interface SearchProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={onSearchChange}
      placeholder="Search characters..."
      className="border-gray-300 p-2 border rounded w-full"
    />
  );
};

export default Search;
