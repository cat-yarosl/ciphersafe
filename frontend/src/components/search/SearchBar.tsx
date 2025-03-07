import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="
      relative 
      mb-4
    ">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        className="
          border 
          p-2 
          rounded 
          w-full 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          pr-10
      "/>
      <FontAwesomeIcon icon={faSearch} className="
        h-5 
        w-5 
        text-gray-500 
        absolute right-3 
        top-1/2 
        transform 
        -translate-y-1/2
      "/>
    </div>
  );
};

export default SearchBar;