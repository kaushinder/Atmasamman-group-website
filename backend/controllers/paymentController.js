const Payment = require("../models/Payment");
const { v4: uuidv4 } = require("uuid");

const submitPayment = async (req, res, next) => {
  try {
    const { name, email, program, amount, method, userId } = req.body;
    const transactionId = "TXN-" + uuidv4().toUpperCase().replace(/-/g, "").slice(0, 12);
    const payment = await Payment.create({
      userId: userId || "", name, email, program,
      amount: Number(amount), method, transactionId,
      status: "success", paidAt: new Date(),
    });
    res.status(201).json({
      success: true, message: "Payment recorded successfully!",
      data: { id: payment._id, transactionId: payment.transactionId, amount: payment.amount, program: payment.program, status: payment.status },
    });
  } catch (error) { next(error); }
};

const getAllPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: payments.length, data: payments });
  } catch (error) { next(error); }
};

module.exports = { submitPayment, getAllPayments };
