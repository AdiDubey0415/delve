require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const authMiddleware = require("./middleware/auth");
// const https = require("https");
// const fs = require("fs");
// const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Load SSL Certificates
// const options = {
//   key: fs.readFileSync(path.join(__dirname, "server.key")),
//   cert: fs.readFileSync(path.join(__dirname, "server.cert")),
// };

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Simple test route
app.get("/", (req, res) => {
  res.send("Delve Backend is running!");
});

// Start server
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Sign in with email and password
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // If successful, return the session data
    res.json({
      success: true,
      data: {
        session: data.session,
        user: data.user,
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
});

// Optional: Add signup endpoint if needed
app.post("/api/auth/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    res.json({
      success: true,
      data: {
        user: data.user,
        session: data.session,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

// Verify token endpoint (use this to check if user's token is still valid)
app.post("/api/auth/verify", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: "No token provided",
    });
  }

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error) throw error;

    res.json({
      success: true,
      data: { user },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: "Invalid token",
    });
  }
});

// server.js

// MFA Check
app.post("/api/checks/mfa", async (req, res) => {
  try {
    // Use the authenticated user's supabase client
    // const {
    //   data: { users },
    //   error,
    // } = await supabase.auth.admin.listUsers();
    // if (error) throw error;

    const users = [
      {
        id: 1,
        email: "user1@example.com",
        mfa_enabled: true,
      },
      {
        id: 1,
        email: "user1@example.com",
        mfa_enabled: true,
      },
    ];

    const mfaStatus = users.map((user) => ({
      id: user.id,
      email: user.email,
      hasMFA: user.mfa_enabled,
      timestamp: new Date().toISOString(),
    }));

    await logEvidence({
      check: "MFA Status",
      results: mfaStatus,
      timestamp: new Date().toISOString(),
    });

    res.json(mfaStatus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// RLS Check
app.post("/api/checks/rls", async (req, res) => {
  try {
    // Fetch table names and RLS status
    // const { data, error } = await supabase.rpc("get_table_rls_status");
    // if (error) throw error;

    const tables = [
      {
        id: 1,
        name: "instruments",
        rls_enabled: false,
      },
      {
        id: 2,
        name: "profiles",
        rls_enabled: true,
      },
    ];

    const rlsStatus = tables.map((table) => ({
      id: table.id,
      name: table.name,
      hasRLS: table.rls_enabled,
      timestamp: new Date().toISOString(),
    }));

    // Log evidence
    await logEvidence({
      check: "RLS Status",
      results: rlsStatus,
      timestamp: new Date().toISOString(),
    });

    res.json(rlsStatus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PITR Check
app.post("/api/checks/pitr", async (req, res) => {
  try {
    // Get project settings
    // const { data: projects, error } = await supabase.rpc("get_projects");
    // if (error) throw error;

    const projects = [
      {
        id: 1,
        name: "Project 1",
        pitr_enabled: false,
      },
      {
        id: 2,
        name: "Project 2",
        pitr_enabled: true,
      },
    ];

    const pitrStatus = projects.map((project) => ({
      id: project.id,
      name: project.name,
      hasPITR: project.pitr_enabled,
      timestamp: new Date().toISOString(),
    }));

    // Log evidence
    await logEvidence({
      check: "PITR Status",
      results: pitrStatus,
      timestamp: new Date().toISOString(),
    });

    res.json(pitrStatus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/logs", async (req, res) => {
  try {
    // Get project settings
    // const { data: projects, error } = await supabase.rpc("get_projects");
    // if (error) throw error;

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
});

// Use it in your routes
app.get("/api/protected-route", authMiddleware, (req, res) => {
  // Access authenticated user with req.user
  res.json({ data: "Protected data" });
});

// Create a table in your database for logs
const logEvidence = async (data) => {
  const { check, results, timestamp } = data;

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

// Create HTTPS Server
// https.createServer(options, app).listen(PORT, () => {
//   console.log(`🚀 Server running on https://localhost:${PORT}`);
// });
