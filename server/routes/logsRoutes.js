import express from "express";
import { fetchLogs } from "../controllers/logsController.js";

const router = express.Router();

// Route for MFA Check
router.post("/logs", fetchLogs);

export default router;
