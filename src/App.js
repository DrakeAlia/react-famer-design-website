import React from "react";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
