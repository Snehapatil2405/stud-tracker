import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const SearchBar = ({ placeholder }) => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder={placeholder || "Search..."}
      className="w-full px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 placeholder:text-gray-500"
    />
  );
};

export default SearchBar;