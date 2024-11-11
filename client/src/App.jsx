import "./App.css";
import "./index.css";
import React from "react";
import Images from "./components/Images";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/images" element={<Images />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

