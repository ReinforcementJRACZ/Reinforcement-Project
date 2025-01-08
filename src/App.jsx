import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./assets/pages/LoginPage";
import SignupPage from "./assets/pages/SignupPage";
import Catalog from "./assets/components/Catalog";
import MyBooks from "./assets/components/MyBooks";

// Used to track auth state
// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//// Static value for now for debugging purposes
// function App() {
//   const isAuthenticated = false; 

  const App = () => {
    return (
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/mybooks" element={<MyBooks />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    );
  };
  
  export default App;