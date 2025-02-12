import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import checkRoutes from "./routes/checkRoutes.js";
import logsRoutes from "./routes/logsRoutes.js";

// Load environment variables
dotenv.config({ path: "./.env.local" });

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/checks", checkRoutes);
app.use("/api", logsRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Supabase Security API!");
});

// Start Server
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
