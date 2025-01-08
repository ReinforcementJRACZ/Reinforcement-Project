import React from "react";
import { Box, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

function LoginPage() {
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
        BetterReads
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, fontStyle: "italic" }}>
        “A room without books is like a body without a soul.”
      </Typography>
      <LoginForm />
    </Box>
  );
}

export default LoginPage;

// import React from "react";
// import { Box, Typography } from "@mui/material";
// import LoginForm from "../components/LoginForm";
// import Logo from "../components/Logo";

// function LoginPage() {
//   return (
//     <Box
//       sx={{
//         textAlign: "center",
//         p: 4,
//         backgroundColor: "#f9f5f2",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Logo />
//       <Typography variant="h3" sx={{ color: "#6a1b9a", mb: 2 }}>
//         BetterReads
//       </Typography>
//       <Typography variant="subtitle1" sx={{ mb: 4, fontStyle: "italic" }}>
//         “A room without books is like a body without a soul.”
//       </Typography>
//       <LoginForm />
//     </Box>
//   );
// }

// export default LoginPage;
