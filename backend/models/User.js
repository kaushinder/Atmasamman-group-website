const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true, index: true },
  name: { type: String, trim: true, default: "" },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  photoURL: { type: String, default: "" },
  provider: { type: String, enum: ["email", "google"], default: "email" },
  role: { type: String, enum: ["user", "admin"], default: "user" },
}, { timestamps: true });
module.exports = mongoose.model("User", userSchema);
