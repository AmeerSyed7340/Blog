import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/Homepage";
import ReadPage from "./views/Readpage";
import WritePage from "./views/Writepage";
import NavBar from './components/Navbar';


function App() {
  return (
    <>
    <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<ReadPage />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;