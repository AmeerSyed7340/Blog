import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import HomePage from "./views/Homepage";
import ReadPage from "./views/Readpage";
import WritePage from "./views/Writepage";
import NavBar from './components/Navbar';
import MyBlogspage from "./views/MyBlogspage";

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
        <Router>
          <NavBar
            displayName={displayName}
            setDisplayName={displayHandler}
            authorize_flag={authorize_flag}
            setAuthorize_flag={setAuthorize_flag}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id/:username/:title" element={<ReadPage />} />
            <Route path="/write" element={
              authorize_flag ? <WritePage /> : <Navigate to="/" />
            } />
            <Route path="/myblogs" element={authorize_flag ? <MyBlogspage /> : <Navigate to="/" />
            } />
          </Routes>
        </Router>
      </>
    </AuthProvider>
  );
}

export default App;