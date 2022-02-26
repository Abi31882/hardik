import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataComponent from "./components/DataComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
