import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const hardcodedEmail = "testuser@example.com";
    const hardcodedPassword = "password123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      navigate("/mybooks", { state: { username: "Test User" } });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", textAlign: "center", p: 4, backgroundColor: "#f9f5f2", borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ color: "#d3819e", mb: 2 }}>Login to BetterReads</Typography>
      {error && <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>}
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
        onClick={handleLogin}
      >
        Login
      </Button>
      <Typography sx={{ mt: 2 }}>
        Don’t have an account? <a href="/signup" style={{ color: "#d3819e", textDecoration: "none" }}>Sign up!</a>
      </Typography>
    </Box>
  );
};

export default LoginForm;


// import React, { useState } from "react";
// import { Button, TextField, Typography, Box } from "@mui/material";
// import { GoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("/api/auth/login", { email, password });
//       alert(`Welcome back, ${response.data.user.username}!`);
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   const handleGoogleSuccess = async () => {
//     window.location.href = "/api/auth/google"; // Redirect to Google OAuth
//   };

//   return (
//     <Box sx={{ maxWidth: 400, margin: "auto", textAlign: "center", p: 4, backgroundColor: "#f9f5f2", borderRadius: 2, boxShadow: 3 }}>
//       <Typography variant="h4" sx={{ color: "#d3819e", mb: 2 }}>Login to BetterReads</Typography>
//       {error && <Typography sx={{ color: "red", mb: 2 }}>{error}</Typography>}
//       <TextField
//         label="Email"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <TextField
//         label="Password"
//         type="password"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button
//         variant="contained"
//         fullWidth
//         sx={{ mt: 2, backgroundColor: "#d3819e", "&:hover": { backgroundColor: "#b56985" } }}
//         onClick={handleLogin}
//       >
//         Login
//       </Button>
//       <Box sx={{ mt: 2 }}>
//         <GoogleLogin
//           clientId="YOUR_GOOGLE_CLIENT_ID"
//           buttonText="Login with Google"
//           onSuccess={handleGoogleSuccess}
//           onFailure={() => setError("Google Login failed")}
//         />
//       </Box>
//       <Typography sx={{ mt: 2 }}>
//         Don’t have an account? <a href="/signup" style={{ color: "#d3819e", textDecoration: "none" }}>Sign up!</a>
//       </Typography>
//     </Box>
//   );
// };

// export default LoginForm;
