import express from "express";
import {
  checkMFA,
  checkRLS,
  checkPITR,
} from "../controllers/checkController.js";

const router = express.Router();

// Route for MFA Check
router.post("/mfa", checkMFA);
router.post("/rls", checkRLS);
router.post("/pitr", checkPITR);

export default router;
