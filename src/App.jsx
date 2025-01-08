import React, { useState } from 'react';
import MenuAppBar from './assets/components/AppBar';
import Catalog from './assets/components/Catalog';
import MyBooks from './assets/components/MyBooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <>
		// 	<MenuAppBar />
		// 	<Catalog />
    // </>
		<Router>
      <MenuAppBar />
      <Routes>
        <Route path="/" element={<MyBooks />}/>
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/catalogue" element={<Catalog />} />
        {/* <Route path="/my-books" element={<MyBooks />} /> */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
