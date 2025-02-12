"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

type HeaderCellProps = {
  label: string;
  sortKey: string;
  sortConfig: { key: string; direction: "asc" | "desc" };
  onSort: (key: string) => void;
};

const HeaderCell = ({
  label,
  sortKey,
  sortConfig,
  onSort,
}: HeaderCellProps) => {
  return (
    <div
      className="flex items-center gap-1 cursor-pointer px-4 py-2 hover:bg-gray-50 select-none"
      onClick={() => onSort(sortKey)}
    >
      <span className="font-medium text-sm text-gray-800">{label}</span>
      {sortConfig.key === sortKey &&
        (sortConfig.direction === "asc" ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        ))}
    </div>
  );
};

export default HeaderCell;
