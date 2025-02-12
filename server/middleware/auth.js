// middleware/auth.js
const supabase = require("../models/supabaseClient");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Authentication required",
    });
  }

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error) throw error;

    // Add user to request object
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: "Invalid token",
    });
  }
};

module.exports = authMiddleware;
