// External Library + Context Imports
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// Utility Imports

// Primary Component Imports

// Modal Component Imports

// Style Imports

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;