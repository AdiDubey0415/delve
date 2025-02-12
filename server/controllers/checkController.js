import { logEvidence } from "./logsController.js";

/**
 * @desc   Check if MFA is enabled for a user
 * @route  POST /api/checks/mfa
 */
export const checkMFA = async (req, res) => {
  try {
    const users = [
      {
        id: 1,
        email: "user1@example.com",
        mfa_enabled: true,
      },
      {
        id: 1,
        email: "user2@example.com",
        mfa_enabled: false,
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
};

/**
 * @desc   Check if RLS is enabled for a user
 * @route  POST /api/checks/rls
 */
export const checkRLS = async (req, res) => {
  try {
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
};

/**
 * @desc   Check if PITR is enabled for a user
 * @route  POST /api/checks/pitr
 */
export const checkPITR = async (req, res) => {
  try {
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
};
