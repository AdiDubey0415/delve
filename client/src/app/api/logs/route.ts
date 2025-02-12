import { NextResponse } from "next/server";

export async function GET() {
  const logs = [
    {
      timestamp: "2025-02-09T10:15:30Z",
      level: "error",
      component: "projects",
      message: "Users Failed to fetch project details from the database",
    },
    {
      timestamp: "2025-02-09T10:16:45Z",
      level: "info",
      component: "tables",
      message: "Successfully fetched list of tables",
    },
    {
      timestamp: "2025-02-09T10:17:20Z",
      level: "warning",
      component: "users",
      message: "User authentication took longer than expected",
    },
    {
      timestamp: "2025-02-09T10:18:05Z",
      level: "fatal",
      component: "projects",
      message: "Database connection lost while retrieving projects",
    },
    {
      timestamp: "2025-02-09T10:19:10Z",
      level: "info",
      component: "logs",
      message: "Logs API was accessed successfully",
    },
    {
      timestamp: "2025-02-09T10:20:30Z",
      level: "error",
      component: "tables",
      message: "Table schema validation failed",
    },
    {
      timestamp: "2025-02-09T10:21:50Z",
      level: "warning",
      component: "projects",
      message: "Project creation took longer than expected",
    },
    {
      timestamp: "2025-02-09T10:22:15Z",
      level: "info",
      component: "users",
      message: "New user registered successfully",
    },
  ];

  return NextResponse.json(logs);
}
