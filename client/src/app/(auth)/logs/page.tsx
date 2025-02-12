"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import List from "@/components/list";

interface User {
  id: number;
  name: string;
  role: string;
}

// Centralized color configuration for log levels
const LOG_LEVEL_STYLES: any = {
  ERROR: "bg-red-100 text-red-800",
  FATAL: "bg-red-300 text-red-900",
  WARNING: "bg-orange-100 text-orange-800",
  INFO: "bg-blue-100 text-blue-800",
};

const LogsPage = () => {
  const [logs, setLogs] = useState<User[]>([]);

  useEffect(() => {
    fetchData("logs").then(setLogs);
  }, []);

  const logsColumns = [
    { key: "timestamp", label: "TimeStamp" },
    {
      key: "level",
      label: "Level",
      render: (value: string) => {
        return (
          <span
            className={`inline-block px-2 py-1 rounded text-xs ${
              LOG_LEVEL_STYLES[value.toUpperCase()] ||
              "bg-gray-100 text-gray-800"
            }`}
          >
            {value}
          </span>
        );
      },
    },
    { key: "component", label: "Component" },
    { key: "message", label: "Message" },
  ];

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold mb-4">Logs</h1>

      <List
        data={logs}
        columns={logsColumns}
        searchOnFields={["message", "component"]}
        filterOnFields={["level", "component"]}
        itemsPerPage={2}
      />
    </div>
  );
};

export default LogsPage;
