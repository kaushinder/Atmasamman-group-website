const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { registerUser, getMe } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

router.post("/register",
  [body("uid").notEmpty().withMessage("uid is required"), body("email").isEmail().withMessage("Valid email required")],
  validate, registerUser
);
router.get("/me", authMiddleware, getMe);
module.exports = router;
