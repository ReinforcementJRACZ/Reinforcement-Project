import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const MyBooks = () => {
  const location = useLocation();
  const username = location.state?.username || "Guest";

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
      <Typography variant="h3" sx={{ color: "#6a1b9a", mb: 2 }}>
        Welcome, {username}!
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Here’s your personal library.
      </Typography>

      {/* Replace this with the actual content of the user's library */}
      
      <Typography>Your books will appear here soon!</Typography>
    </Box>
  );
};

export default MyBooks;
