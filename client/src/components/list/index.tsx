"use client";
import React, { useState, useMemo } from "react";
import FilterDropdown from "./Filters";
import Pagination from "./Pagination";
import SearchBar from "./Search";
import HeaderCell from "./HeaderCell";

type ListProps = {
  data: any[];
  columns: any[];
  searchOnFields?: string[];
  filterOnFields?: string[];
  itemsPerPage?: number;
};

const List = ({
  data,
  columns,
  searchOnFields = [],
  filterOnFields = [],
  itemsPerPage = 20,
}: ListProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<any>({
    key: null,
    direction: "asc",
  });

  // Initialize filters
  React.useEffect(() => {
    const initialFilters: any = {};
    filterOnFields.forEach((field) => {
      initialFilters[field] = "";
    });
    setFilters(initialFilters);
  }, [filterOnFields]);

  // Handle sorting
  const handleSort = (key: string) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  // Filter and search data
  const filteredData = useMemo(() => {
    let result = [...data];

    // Apply search
    if (searchValue) {
      result = result.filter((item) =>
        searchOnFields.some((field) =>
          String(item[field]).toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }

    // Apply filters
    Object.entries(filters).forEach(([field, value]) => {
      if (value) {
        result = result.filter((item) => String(item[field]) === value);
      }
    });

    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [data, searchValue, filters, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        {searchOnFields.length > 0 && (
          <SearchBar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            placeholder={`Search by ${searchOnFields.join(", ")}...`}
          />
        )}

        {filterOnFields.map((field) => (
          <FilterDropdown
            key={field}
            field={field}
            options={[...new Set(data.map((item) => String(item[field])))]}
            value={filters[field]}
            onChange={(value) =>
              setFilters((prev: any) => ({ ...prev, [field]: value }))
            }
          />
        ))}
      </div>
      <div>
        <div className="bg-gray-50 rounded-t-lg border border-gray-200">
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${columns?.length}, minmax(0, 1fr))`,
            }}
          >
            {columns?.map(({ key, label }) => (
              <HeaderCell
                key={key}
                sortKey={key}
                label={label}
                sortConfig={sortConfig}
                onSort={handleSort}
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-b-lg border border-gray-200 border-t-0">
          {paginatedData.map((item, index) => (
            <div
              key={item.id || index}
              className="grid gap-2 px-4 py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
              style={{
                gridTemplateColumns: `repeat(${columns?.length}, minmax(0, 1fr))`,
              }}
            >
              {columns?.map(({ key, render }) => (
                <div key={key} className="text-sm text-gray-800">
                  {render ? render(item[key], item) : item[key]}
                </div>
              ))}
            </div>
          ))}

          {paginatedData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No results found
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItemsCount={filteredData?.length}
        />
      </div>
    </div>
  );
};

export default List;
