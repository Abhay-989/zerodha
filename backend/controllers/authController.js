import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// REGISTER USER
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: "All fields are required" });

    if (password.length < 6)
      return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ success: false, message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password,
    });

    const token = signToken(newUser._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// LOGIN USER
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ success: false, message: "All fields are required" });

    // Correct: include password using '+password'
    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(401).json({ success: false, message: "No user found " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ success: false, message: "Invalid password" });

    const token = signToken(user._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const { password: _, ...userData } = user.toObject();
    res.status(200).json({ success: true, user: userData });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// LOGOUT USER
export const logout = (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};


// PROFILE
export const profile = (req, res) => {
  // req.user is set by your auth middleware (protect)
  res.status(200).json({
    success: true,
    message: "Welcome to your profile!",
    user: req.user,
  });
};

