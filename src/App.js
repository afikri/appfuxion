import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default App;
