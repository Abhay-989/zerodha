import express from "express";
const router = express.Router();

// Use named imports, not default
import { signup, login, logout } from "../controllers/authController.js";



// Step 1: Register route
router.post("/signup", signup);

// Step 2: Login route
router.post("/login", login);


// Step 3: logout
router.get("/logout",logout);

export default router;
