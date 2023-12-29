import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./views/Homepage";
import ReadPage from "./views/Readpage";
import WritePage from "./views/Writepage";
import NavBar from './components/Navbar';
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [authorize_flag, setAuthorize_flag] = useState(false);
  const [displayName, setDisplayName] = useState("");

  function displayHandler(value) {
    setDisplayName(value);
  }

  return (
    <AuthProvider>
      <>
        <NavBar
          displayName={displayName}
          setDisplayName={displayHandler}
          authorize_flag={authorize_flag}
          setAuthorize_flag={setAuthorize_flag}
        />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<ReadPage />} />
            <Route path="/write" element={
              authorize_flag ? <WritePage /> : <Navigate to="/" />
            } />
          </Routes>
        </Router>
      </>
    </AuthProvider>
  );
}

export default App;