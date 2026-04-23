const initFirebaseAdmin = require("../config/firebaseAdmin");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
  }
  const token = authHeader.split("Bearer ")[1];
  try {
    const admin = initFirebaseAdmin();
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized: Invalid or expired token" });
  }
};

module.exports = authMiddleware;
