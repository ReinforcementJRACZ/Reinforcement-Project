import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./assets/pages/LoginPage";
import SignupPage from "./assets/pages/SignupPage";
import Catalog from "./assets/components/Catalog";
import MyBooks from "./assets/components/MyBooks";
import React, { useState } from 'react';
import MenuAppBar from './assets/components/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MenuAppBar />
        <Box sx={{ pt: 8 }}> {/* Prevent AppBar overlap */}
          <Routes>
            <Route path="/" element={<MyBooks />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/my-books" element={<MyBooks />} />
            <Route path="/catalogue" element={<Catalog />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
