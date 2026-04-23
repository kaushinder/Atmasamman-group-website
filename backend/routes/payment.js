const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { submitPayment, getAllPayments } = require("../controllers/paymentController");
const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validate");

router.post("/",
  [body("name").trim().notEmpty().withMessage("Name is required"),
   body("email").isEmail().withMessage("Valid email required"),
   body("program").trim().notEmpty().withMessage("Program is required"),
   body("amount").isNumeric().withMessage("Amount must be a number"),
   body("method").isIn(["card","upi"]).withMessage("Method must be card or upi")],
  validate, submitPayment
);
router.get("/", authMiddleware, getAllPayments);
module.exports = router;
