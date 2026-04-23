const User = require("../models/User");

const registerUser = async (req, res, next) => {
  try {
    const { uid, name, email, photoURL, provider } = req.body;
    if (!uid || !email) return res.status(400).json({ success: false, message: "uid and email are required" });
    const user = await User.findOneAndUpdate(
      { uid },
      { uid, name: name || "", email: email.toLowerCase(), photoURL: photoURL || "", provider: provider || "email" },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({
      success: true,
      message: "User synced successfully",
      data: { id: user._id, uid: user.uid, name: user.name, email: user.email, role: user.role, photoURL: user.photoURL },
    });
  } catch (error) { next(error); }
};

const getMe = async (req, res, next) => {
  try {
    const user = await User.findOne({ uid: req.user.uid }).select("-__v");
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, data: user });
  } catch (error) { next(error); }
};

module.exports = { registerUser, getMe };
