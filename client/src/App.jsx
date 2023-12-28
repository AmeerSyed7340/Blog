import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./views/Homepage";
import ReadPage from "./views/Readpage";
import WritePage from "./views/Writepage";
import NavBar from './components/Navbar';


function App() {
  const [authorize_flag, setAuthorize_flag] = useState(false); 

  return (
    <>
    <NavBar />
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
  );
}

export default App;