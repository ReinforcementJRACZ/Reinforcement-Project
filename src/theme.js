import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A259FF", // Lavender/Purple from the logo
    },
    secondary: {
      main: "#F8AFA6", // Pastel Pink
    },
    background: {
      default: "#FAF4E8", // Cream/Off-White
    },
    text: {
      primary: "#4B3A58", // Dark Purple
      secondary: "#7B6B8A", // Subtle secondary text
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2rem",
      color: "#4B3A58",
    },
    subtitle1: {
      fontStyle: "italic",
      color: "#7B6B8A",
    },
  },
});

export default theme;

// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#A259FF", // Lavender/Purple from the logo
//     },
//     secondary: {
//       main: "#F8AFA6", // Pastel Pink
//     },
//     background: {
//       default: "#FAF4E8", // Cream/Off-White
//     },
//     text: {
//       primary: "#4B3A58", // Dark Purple
//       secondary: "#7B6B8A", // Subtle secondary text
//     },
//   },
//   typography: {
//     fontFamily: "'Roboto', 'Arial', sans-serif",
//     h1: {
//       fontWeight: 700,
//       fontSize: "2rem",
//       color: "#4B3A58",
//     },
//     subtitle1: {
//       fontStyle: "italic",
//       color: "#7B6B8A",
//     },
//   },
// });

// export default theme;
