"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItemsCount: number;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItemsCount,
}: PaginationProps) => {
  return (
    <div className="flex items-center gap-2">
      <span>Total Items: {totalItemsCount}</span>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-gray-800 px-4 py-2 rounded-md bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        Previous
      </button>
      <span className="px-3">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-gray-800 px-4 py-2 rounded-md bg-white border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
