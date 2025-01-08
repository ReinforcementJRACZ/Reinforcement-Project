import React from "react";
import { Box, Typography } from "@mui/material";
import SignupForm from "../components/SignupForm";
import Logo from "../components/Logo";

function SignupPage() {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        backgroundColor: "#f9f5f2",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logo />
      <Typography variant="h3" sx={{ color: "#6a1b9a", mb: 2 }}>
        Sign Up to BetterReads
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        “The journey of a thousand miles begins with a single page.”
      </Typography>
      <SignupForm />
    </Box>
  );
}

export default SignupPage;
