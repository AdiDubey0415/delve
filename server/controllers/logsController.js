import { createClient } from "@supabase/supabase-js";

export const logEvidence = async (data) => {
  const { check, results, timestamp } = data;

  const supabase = createClient(
    "https://vgnjikinfcpiyijbwgjh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnbmppa2luZmNwaXlpamJ3Z2poIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTAxMzg0MSwiZXhwIjoyMDU0NTg5ODQxfQ.XApHKSotPLEBTVVKgtU2HT4ct39DhCsxdqI3rFF6z_0"
  );

  try {
    await supabase.from("compliance_logs").insert([
      {
        check_type: check,
        results: results,
        timestamp: timestamp,
        status: results.every((r) => r.hasMFA || r.hasRLS || r.hasPITR)
          ? "PASS"
          : "FAIL",
      },
    ]);
  } catch (error) {
    console.error("Error logging evidence:", error);
  }
};

/**
 * @desc   To fetch all logs
 * @route  POST /api/logs
 */
export const fetchLogs = async (req, res) => {
  try {
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

    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
