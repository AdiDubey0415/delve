"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import List from "@/components/list";

interface Table {
  id: number;
  name: string;
  hasRLS: boolean;
}

const TablesPage = () => {
  const [tables, setTables] = useState<Table[]>([]);

  useEffect(() => {
    fetchData("checks/rls").then(setTables);
  }, []);

  const tableColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Table Name" },
    {
      key: "hasRLS",
      label: "RLS Status",
      render: (value: string) => {
        return (
          <span
            className={`inline-block px-2 py-1 rounded text-xs ${
              value
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {value ? "Enabled" : "Disabled"}
          </span>
        );
      },
    },
  ];

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold mb-4">Tables</h1>

      <List
        data={tables}
        columns={tableColumns}
        searchOnFields={["name"]}
        filterOnFields={["hasRLS"]}
      />
    </div>
  );
};

export default TablesPage;
