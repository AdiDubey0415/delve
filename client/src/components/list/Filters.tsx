"use client";

type FilterDropdownProps = {
  field: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const FilterDropdown = ({
  field,
  options,
  value,
  onChange,
}: FilterDropdownProps) => {
  const uniqueOptions = [...new Set(options)];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-gray-800 px-3 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
    >
      <option value="">All {field}s</option>
      {uniqueOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
