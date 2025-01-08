// SignupForm component
import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import axios from "axios";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/auth/signup", { username, email, password });
      alert("Account created successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", textAlign: "center", p: 4, backgroundColor: "#f9f5f2", borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ color: "#d3819e", mb: 2 }}>Sign Up for BetterReads</Typography>
      {error && <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>}
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2, backgroundColor: "#d3819e", "&:hover": { backgroundColor: "#b56985" } }}
        onClick={handleSignup}
      >
        Sign Up
      </Button>
      <Typography sx={{ mt: 2 }}>
        Already have an account? <a href="/login" style={{ color: "#d3819e", textDecoration: "none" }}>Login!</a>
      </Typography>
    </Box>
  );
};

export default SignupForm;
