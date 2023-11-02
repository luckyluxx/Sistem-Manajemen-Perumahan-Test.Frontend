import React, { useState } from "react";
import "./index.css"
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./views/Homepage"
function App() {
  return (
    <>
      <div className="Main">
        {/* define the route of each views */}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
