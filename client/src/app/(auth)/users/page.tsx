"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import List from "@/components/list";

interface User {
  id: number;
  name: string;
  role: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData("checks/mfa").then(setUsers);
  }, []);

  const usersColumns = [
    { key: "id", label: "ID" },
    { key: "email", label: "Email" },
    {
      key: "hasMFA",
      label: "MFA Status",
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
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <List
        data={users}
        columns={usersColumns}
        searchOnFields={["email"]}
        filterOnFields={["hasMFA"]}
      />
    </div>
  );
};

export default UsersPage;
