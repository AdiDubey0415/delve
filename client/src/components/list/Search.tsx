"use client";
import { Search } from "lucide-react";

type SearchBarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
};

const SearchBar = ({
  searchValue,
  onSearchChange,
  placeholder,
}: SearchBarProps) => {
  return (
    <div className="relative w-72">
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-9 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
