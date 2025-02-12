"use client";
import List from "@/components/list";
import { fetchData } from "@/utils/api";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  hasPITR: boolean;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchData("checks/pitr").then(setProjects);
  }, []);

  const projectColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Project Name" },
    {
      key: "hasPITR",
      label: "PITR Status",
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
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <List
        data={projects}
        columns={projectColumns}
        searchOnFields={["name"]}
        filterOnFields={["hasPITR"]}
      />
    </div>
  );
};

export default ProjectsPage;
