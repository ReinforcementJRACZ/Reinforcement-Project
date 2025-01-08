//Routes for authentication (login/signup/OAuth)- Connect routes to controller methods

import express from "express";
import passport from "../config/passportConfig.js";
import { signup, login, googleCallback } from "../controllers/authController.js";

const router = express.Router();

// Signup route
router.post("/signup", signup);
// Login route
router.post("/login", login);
// Google OAuth routes
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  // Redirect after successful login
  router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      res.redirect("/");
    }
  );

export default router;
