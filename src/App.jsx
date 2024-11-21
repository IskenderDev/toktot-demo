import React from "react";
import { Route, Routes } from "react-router-dom";

import Demo from "./Demo/Demo";
import Login from "./Demo/logIn/LogIn";

const App = () => {
  return (
    <Routes>
      <Route path="/demo" element={<Demo />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;
