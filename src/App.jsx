import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuAppBar from './assets/components/AppBar';
import Catalog from './assets/components/Catalog';
import MyBooks from './assets/components/MyBooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme'
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
// 		<Router>
//       <MenuAppBar />
//       <Routes>
//         <Route path="/" element={<MyBooks />}/>
//         <Route path="/my-books" element={<MyBooks />} />
//         <Route path="/catalogue" element={<Catalog />} />
//         {/* <Route path="/my-books" element={<MyBooks />} /> */}
//         <Route path="*" element={<h1>404 Not Found</h1>} />
//       </Routes>
//     </Router>
//   )
// }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MenuAppBar />
        <Box sx={{ pt: 8 }}> {/* Prevent AppBar overlap */}
          <Routes>
            <Route path="/" element={<MyBooks />} />
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
